import gql from 'graphql-tag'
import { useCallback, useMemo, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import styled from 'styled-components'
import { Container } from '../components/Container'
import Spacer from '../components/Spacer'
import Text from '../components/Text'
import { File, useUploadFileMutation } from '../generated/graphql'

export const uploadFile = gql`
  mutation uploadFile($file: Upload!, $directory: String) {
    uploadFile(file: $file, directory: $directory) {
      id
      fileName
      key
    }
  }
`

export const useUpload = (
  multiple: boolean = false,
  directory: string | undefined = undefined
) => {
  const [uploadFile] = useUploadFileMutation()
  const [uploadFiles, setUploadFiles] = useState<File[] | File | undefined>(
    multiple ? [] : undefined
  )

  const onDrop = useCallback(
    async acceptedFiles => {
      const files = await Promise.all(
        acceptedFiles.map(async file => {
          const { data } = await uploadFile({ variables: { file, directory } })
          return data?.uploadFile
        }) as File[]
      )

      setUploadFiles(multiple ? files : files[0])
    },
    [uploadFiles, setUploadFiles, uploadFile]
  )

  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  const UI = useMemo(() => {
    return (
      <>
        <DropZone {...getRootProps()}>
          <input {...getInputProps()} />
          <Text h1 as="span" color="grey">
            Zde nahrejte foto
          </Text>
          <Text>
            Minimální velikost obrázku alespoň 450 px x 450 px. Povolené formáty
            JPG a PNG. Maximální velikost x MB
          </Text>
        </DropZone>
        {multiple && (
          <Container>
            <Spacer y={2} />
            {Array.isArray(uploadFiles) &&
              uploadFiles.map(file => (
                <>
                  <Container flex="0 0 auto" row vcenter>
                    <Img src={`https://davamcz.imgix.net/${file.key}?h=100`} />
                    <Spacer />
                    {file.fileName}
                  </Container>
                  <Spacer />
                </>
              ))}
          </Container>
        )}
      </>
    )
  }, [getRootProps, getInputProps, setUploadFiles, uploadFiles])

  return [UI, uploadFiles]
}

const DropZone = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;
  border: 1px dashed #999999;
  padding: 120px 24px;
  cursor: pointer;
`

const Img = styled.img`
  width: auto;
`
