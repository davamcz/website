import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  DateTime: any,
  /** The `Upload` scalar type represents a file upload. */
  Upload: any,
};

export type Adress = {
   __typename?: 'Adress',
  id: Scalars['ID'],
  city?: Maybe<Scalars['String']>,
  street?: Maybe<Scalars['String']>,
  postalCode?: Maybe<Scalars['String']>,
};

export type AdressWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  city?: Maybe<Scalars['String']>,
  city_not?: Maybe<Scalars['String']>,
  city_in?: Maybe<Array<Scalars['String']>>,
  city_not_in?: Maybe<Array<Scalars['String']>>,
  city_lt?: Maybe<Scalars['String']>,
  city_lte?: Maybe<Scalars['String']>,
  city_gt?: Maybe<Scalars['String']>,
  city_gte?: Maybe<Scalars['String']>,
  city_contains?: Maybe<Scalars['String']>,
  city_not_contains?: Maybe<Scalars['String']>,
  city_starts_with?: Maybe<Scalars['String']>,
  city_not_starts_with?: Maybe<Scalars['String']>,
  city_ends_with?: Maybe<Scalars['String']>,
  city_not_ends_with?: Maybe<Scalars['String']>,
  street?: Maybe<Scalars['String']>,
  street_not?: Maybe<Scalars['String']>,
  street_in?: Maybe<Array<Scalars['String']>>,
  street_not_in?: Maybe<Array<Scalars['String']>>,
  street_lt?: Maybe<Scalars['String']>,
  street_lte?: Maybe<Scalars['String']>,
  street_gt?: Maybe<Scalars['String']>,
  street_gte?: Maybe<Scalars['String']>,
  street_contains?: Maybe<Scalars['String']>,
  street_not_contains?: Maybe<Scalars['String']>,
  street_starts_with?: Maybe<Scalars['String']>,
  street_not_starts_with?: Maybe<Scalars['String']>,
  street_ends_with?: Maybe<Scalars['String']>,
  street_not_ends_with?: Maybe<Scalars['String']>,
  postalCode?: Maybe<Scalars['String']>,
  postalCode_not?: Maybe<Scalars['String']>,
  postalCode_in?: Maybe<Array<Scalars['String']>>,
  postalCode_not_in?: Maybe<Array<Scalars['String']>>,
  postalCode_lt?: Maybe<Scalars['String']>,
  postalCode_lte?: Maybe<Scalars['String']>,
  postalCode_gt?: Maybe<Scalars['String']>,
  postalCode_gte?: Maybe<Scalars['String']>,
  postalCode_contains?: Maybe<Scalars['String']>,
  postalCode_not_contains?: Maybe<Scalars['String']>,
  postalCode_starts_with?: Maybe<Scalars['String']>,
  postalCode_not_starts_with?: Maybe<Scalars['String']>,
  postalCode_ends_with?: Maybe<Scalars['String']>,
  postalCode_not_ends_with?: Maybe<Scalars['String']>,
  AND?: Maybe<Array<AdressWhereInput>>,
  OR?: Maybe<Array<AdressWhereInput>>,
  NOT?: Maybe<Array<AdressWhereInput>>,
};

export type AuthPayload = {
   __typename?: 'AuthPayload',
  token: Scalars['String'],
  user: User,
};


export type File = {
   __typename?: 'File',
  id: Scalars['ID'],
  fileName: Scalars['String'],
  key: Scalars['String'],
};

export enum FileOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  KeyAsc = 'key_ASC',
  KeyDesc = 'key_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  EncodingAsc = 'encoding_ASC',
  EncodingDesc = 'encoding_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type FileWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  key?: Maybe<Scalars['String']>,
  key_not?: Maybe<Scalars['String']>,
  key_in?: Maybe<Array<Scalars['String']>>,
  key_not_in?: Maybe<Array<Scalars['String']>>,
  key_lt?: Maybe<Scalars['String']>,
  key_lte?: Maybe<Scalars['String']>,
  key_gt?: Maybe<Scalars['String']>,
  key_gte?: Maybe<Scalars['String']>,
  key_contains?: Maybe<Scalars['String']>,
  key_not_contains?: Maybe<Scalars['String']>,
  key_starts_with?: Maybe<Scalars['String']>,
  key_not_starts_with?: Maybe<Scalars['String']>,
  key_ends_with?: Maybe<Scalars['String']>,
  key_not_ends_with?: Maybe<Scalars['String']>,
  fileName?: Maybe<Scalars['String']>,
  fileName_not?: Maybe<Scalars['String']>,
  fileName_in?: Maybe<Array<Scalars['String']>>,
  fileName_not_in?: Maybe<Array<Scalars['String']>>,
  fileName_lt?: Maybe<Scalars['String']>,
  fileName_lte?: Maybe<Scalars['String']>,
  fileName_gt?: Maybe<Scalars['String']>,
  fileName_gte?: Maybe<Scalars['String']>,
  fileName_contains?: Maybe<Scalars['String']>,
  fileName_not_contains?: Maybe<Scalars['String']>,
  fileName_starts_with?: Maybe<Scalars['String']>,
  fileName_not_starts_with?: Maybe<Scalars['String']>,
  fileName_ends_with?: Maybe<Scalars['String']>,
  fileName_not_ends_with?: Maybe<Scalars['String']>,
  mimeType?: Maybe<Scalars['String']>,
  mimeType_not?: Maybe<Scalars['String']>,
  mimeType_in?: Maybe<Array<Scalars['String']>>,
  mimeType_not_in?: Maybe<Array<Scalars['String']>>,
  mimeType_lt?: Maybe<Scalars['String']>,
  mimeType_lte?: Maybe<Scalars['String']>,
  mimeType_gt?: Maybe<Scalars['String']>,
  mimeType_gte?: Maybe<Scalars['String']>,
  mimeType_contains?: Maybe<Scalars['String']>,
  mimeType_not_contains?: Maybe<Scalars['String']>,
  mimeType_starts_with?: Maybe<Scalars['String']>,
  mimeType_not_starts_with?: Maybe<Scalars['String']>,
  mimeType_ends_with?: Maybe<Scalars['String']>,
  mimeType_not_ends_with?: Maybe<Scalars['String']>,
  encoding?: Maybe<Scalars['String']>,
  encoding_not?: Maybe<Scalars['String']>,
  encoding_in?: Maybe<Array<Scalars['String']>>,
  encoding_not_in?: Maybe<Array<Scalars['String']>>,
  encoding_lt?: Maybe<Scalars['String']>,
  encoding_lte?: Maybe<Scalars['String']>,
  encoding_gt?: Maybe<Scalars['String']>,
  encoding_gte?: Maybe<Scalars['String']>,
  encoding_contains?: Maybe<Scalars['String']>,
  encoding_not_contains?: Maybe<Scalars['String']>,
  encoding_starts_with?: Maybe<Scalars['String']>,
  encoding_not_starts_with?: Maybe<Scalars['String']>,
  encoding_ends_with?: Maybe<Scalars['String']>,
  encoding_not_ends_with?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  url_not?: Maybe<Scalars['String']>,
  url_in?: Maybe<Array<Scalars['String']>>,
  url_not_in?: Maybe<Array<Scalars['String']>>,
  url_lt?: Maybe<Scalars['String']>,
  url_lte?: Maybe<Scalars['String']>,
  url_gt?: Maybe<Scalars['String']>,
  url_gte?: Maybe<Scalars['String']>,
  url_contains?: Maybe<Scalars['String']>,
  url_not_contains?: Maybe<Scalars['String']>,
  url_starts_with?: Maybe<Scalars['String']>,
  url_not_starts_with?: Maybe<Scalars['String']>,
  url_ends_with?: Maybe<Scalars['String']>,
  url_not_ends_with?: Maybe<Scalars['String']>,
  AND?: Maybe<Array<FileWhereInput>>,
  OR?: Maybe<Array<FileWhereInput>>,
  NOT?: Maybe<Array<FileWhereInput>>,
};

export type Gallery = {
   __typename?: 'Gallery',
  id: Scalars['ID'],
  images?: Maybe<Array<File>>,
};


export type GalleryImagesArgs = {
  where?: Maybe<FileWhereInput>,
  orderBy?: Maybe<FileOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type GalleryWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  images_every?: Maybe<FileWhereInput>,
  images_some?: Maybe<FileWhereInput>,
  images_none?: Maybe<FileWhereInput>,
  AND?: Maybe<Array<GalleryWhereInput>>,
  OR?: Maybe<Array<GalleryWhereInput>>,
  NOT?: Maybe<Array<GalleryWhereInput>>,
};

export type Mutation = {
   __typename?: 'Mutation',
  /** Create new Fundlamb offer */
  createOffer: Offer,
  createOrganization: Organization,
  createTransaction: Transaction,
  signup: AuthPayload,
  login: AuthPayload,
  updateUser: User,
  uploadFile: File,
};


export type MutationCreateOfferArgs = {
  name: Scalars['String'],
  description: Scalars['String'],
  organizationId: Scalars['ID'],
  price: Scalars['Int'],
  amount: Scalars['Int'],
  transport: Scalars['String'],
  publicOffer: Scalars['Boolean'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  email: Scalars['String'],
  images: Array<Scalars['ID']>
};


export type MutationCreateOrganizationArgs = {
  apiId: Scalars['Int'],
  apiSecret: Scalars['String'],
  organizationId: Scalars['Int'],
  active?: Maybe<Scalars['Boolean']>,
  name: Scalars['String'],
  logoId: Scalars['ID'],
  description: Scalars['String'],
  url: Scalars['String']
};


export type MutationCreateTransactionArgs = {
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  email: Scalars['String'],
  comment?: Maybe<Scalars['String']>,
  amount: Scalars['Int'],
  offerId: Scalars['ID']
};


export type MutationSignupArgs = {
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  email: Scalars['String'],
  password: Scalars['String']
};


export type MutationLoginArgs = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type MutationUpdateUserArgs = {
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  city: Scalars['String'],
  street: Scalars['String'],
  postalCode: Scalars['String']
};


export type MutationUploadFileArgs = {
  directory?: Maybe<Scalars['String']>,
  file: Scalars['Upload']
};

export type Offer = {
   __typename?: 'Offer',
  id: Scalars['ID'],
  active?: Maybe<Scalars['Boolean']>,
  publicOffer?: Maybe<Scalars['Boolean']>,
  amount: Scalars['Int'],
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  deletedAt?: Maybe<Scalars['DateTime']>,
  email: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  transactions?: Maybe<Array<Transaction>>,
  beneficator: Organization,
  price: Scalars['Int'],
  name: Scalars['String'],
  user: User,
  description: Scalars['String'],
  transport?: Maybe<Scalars['String']>,
  gallery: Gallery,
};


export type OfferTransactionsArgs = {
  where?: Maybe<TransactionWhereInput>,
  orderBy?: Maybe<TransactionOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export enum OfferOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ActiveAsc = 'active_ASC',
  ActiveDesc = 'active_DESC',
  PublicOfferAsc = 'publicOffer_ASC',
  PublicOfferDesc = 'publicOffer_DESC',
  AmountAsc = 'amount_ASC',
  AmountDesc = 'amount_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  FirstNameAsc = 'firstName_ASC',
  FirstNameDesc = 'firstName_DESC',
  LastNameAsc = 'lastName_ASC',
  LastNameDesc = 'lastName_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  TransportAsc = 'transport_ASC',
  TransportDesc = 'transport_DESC'
}

export type OfferWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  active?: Maybe<Scalars['Boolean']>,
  active_not?: Maybe<Scalars['Boolean']>,
  publicOffer?: Maybe<Scalars['Boolean']>,
  publicOffer_not?: Maybe<Scalars['Boolean']>,
  amount?: Maybe<Scalars['Int']>,
  amount_not?: Maybe<Scalars['Int']>,
  amount_in?: Maybe<Array<Scalars['Int']>>,
  amount_not_in?: Maybe<Array<Scalars['Int']>>,
  amount_lt?: Maybe<Scalars['Int']>,
  amount_lte?: Maybe<Scalars['Int']>,
  amount_gt?: Maybe<Scalars['Int']>,
  amount_gte?: Maybe<Scalars['Int']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  deletedAt?: Maybe<Scalars['DateTime']>,
  deletedAt_not?: Maybe<Scalars['DateTime']>,
  deletedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  deletedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  deletedAt_lt?: Maybe<Scalars['DateTime']>,
  deletedAt_lte?: Maybe<Scalars['DateTime']>,
  deletedAt_gt?: Maybe<Scalars['DateTime']>,
  deletedAt_gte?: Maybe<Scalars['DateTime']>,
  email?: Maybe<Scalars['String']>,
  email_not?: Maybe<Scalars['String']>,
  email_in?: Maybe<Array<Scalars['String']>>,
  email_not_in?: Maybe<Array<Scalars['String']>>,
  email_lt?: Maybe<Scalars['String']>,
  email_lte?: Maybe<Scalars['String']>,
  email_gt?: Maybe<Scalars['String']>,
  email_gte?: Maybe<Scalars['String']>,
  email_contains?: Maybe<Scalars['String']>,
  email_not_contains?: Maybe<Scalars['String']>,
  email_starts_with?: Maybe<Scalars['String']>,
  email_not_starts_with?: Maybe<Scalars['String']>,
  email_ends_with?: Maybe<Scalars['String']>,
  email_not_ends_with?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  firstName_not?: Maybe<Scalars['String']>,
  firstName_in?: Maybe<Array<Scalars['String']>>,
  firstName_not_in?: Maybe<Array<Scalars['String']>>,
  firstName_lt?: Maybe<Scalars['String']>,
  firstName_lte?: Maybe<Scalars['String']>,
  firstName_gt?: Maybe<Scalars['String']>,
  firstName_gte?: Maybe<Scalars['String']>,
  firstName_contains?: Maybe<Scalars['String']>,
  firstName_not_contains?: Maybe<Scalars['String']>,
  firstName_starts_with?: Maybe<Scalars['String']>,
  firstName_not_starts_with?: Maybe<Scalars['String']>,
  firstName_ends_with?: Maybe<Scalars['String']>,
  firstName_not_ends_with?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  lastName_not?: Maybe<Scalars['String']>,
  lastName_in?: Maybe<Array<Scalars['String']>>,
  lastName_not_in?: Maybe<Array<Scalars['String']>>,
  lastName_lt?: Maybe<Scalars['String']>,
  lastName_lte?: Maybe<Scalars['String']>,
  lastName_gt?: Maybe<Scalars['String']>,
  lastName_gte?: Maybe<Scalars['String']>,
  lastName_contains?: Maybe<Scalars['String']>,
  lastName_not_contains?: Maybe<Scalars['String']>,
  lastName_starts_with?: Maybe<Scalars['String']>,
  lastName_not_starts_with?: Maybe<Scalars['String']>,
  lastName_ends_with?: Maybe<Scalars['String']>,
  lastName_not_ends_with?: Maybe<Scalars['String']>,
  transactions_every?: Maybe<TransactionWhereInput>,
  transactions_some?: Maybe<TransactionWhereInput>,
  transactions_none?: Maybe<TransactionWhereInput>,
  beneficator?: Maybe<OrganizationWhereInput>,
  price?: Maybe<Scalars['Int']>,
  price_not?: Maybe<Scalars['Int']>,
  price_in?: Maybe<Array<Scalars['Int']>>,
  price_not_in?: Maybe<Array<Scalars['Int']>>,
  price_lt?: Maybe<Scalars['Int']>,
  price_lte?: Maybe<Scalars['Int']>,
  price_gt?: Maybe<Scalars['Int']>,
  price_gte?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  user?: Maybe<UserWhereInput>,
  description?: Maybe<Scalars['String']>,
  description_not?: Maybe<Scalars['String']>,
  description_in?: Maybe<Array<Scalars['String']>>,
  description_not_in?: Maybe<Array<Scalars['String']>>,
  description_lt?: Maybe<Scalars['String']>,
  description_lte?: Maybe<Scalars['String']>,
  description_gt?: Maybe<Scalars['String']>,
  description_gte?: Maybe<Scalars['String']>,
  description_contains?: Maybe<Scalars['String']>,
  description_not_contains?: Maybe<Scalars['String']>,
  description_starts_with?: Maybe<Scalars['String']>,
  description_not_starts_with?: Maybe<Scalars['String']>,
  description_ends_with?: Maybe<Scalars['String']>,
  description_not_ends_with?: Maybe<Scalars['String']>,
  transport?: Maybe<Scalars['String']>,
  transport_not?: Maybe<Scalars['String']>,
  transport_in?: Maybe<Array<Scalars['String']>>,
  transport_not_in?: Maybe<Array<Scalars['String']>>,
  transport_lt?: Maybe<Scalars['String']>,
  transport_lte?: Maybe<Scalars['String']>,
  transport_gt?: Maybe<Scalars['String']>,
  transport_gte?: Maybe<Scalars['String']>,
  transport_contains?: Maybe<Scalars['String']>,
  transport_not_contains?: Maybe<Scalars['String']>,
  transport_starts_with?: Maybe<Scalars['String']>,
  transport_not_starts_with?: Maybe<Scalars['String']>,
  transport_ends_with?: Maybe<Scalars['String']>,
  transport_not_ends_with?: Maybe<Scalars['String']>,
  gallery?: Maybe<GalleryWhereInput>,
  AND?: Maybe<Array<OfferWhereInput>>,
  OR?: Maybe<Array<OfferWhereInput>>,
  NOT?: Maybe<Array<OfferWhereInput>>,
};

export type Organization = {
   __typename?: 'Organization',
  id: Scalars['ID'],
  name: Scalars['String'],
  logo: File,
  offers?: Maybe<Array<Offer>>,
  description: Scalars['String'],
  url: Scalars['String'],
  apiId?: Maybe<Scalars['Int']>,
  projectId?: Maybe<Scalars['Int']>,
};


export type OrganizationOffersArgs = {
  where?: Maybe<OfferWhereInput>,
  orderBy?: Maybe<OfferOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export enum OrganizationOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ApiIdAsc = 'apiId_ASC',
  ApiIdDesc = 'apiId_DESC',
  ApiSecretAsc = 'apiSecret_ASC',
  ApiSecretDesc = 'apiSecret_DESC',
  OrganizationIdAsc = 'organizationId_ASC',
  OrganizationIdDesc = 'organizationId_DESC',
  ActiveAsc = 'active_ASC',
  ActiveDesc = 'active_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ProjectIdAsc = 'projectId_ASC',
  ProjectIdDesc = 'projectId_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export type OrganizationWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  apiId?: Maybe<Scalars['Int']>,
  apiId_not?: Maybe<Scalars['Int']>,
  apiId_in?: Maybe<Array<Scalars['Int']>>,
  apiId_not_in?: Maybe<Array<Scalars['Int']>>,
  apiId_lt?: Maybe<Scalars['Int']>,
  apiId_lte?: Maybe<Scalars['Int']>,
  apiId_gt?: Maybe<Scalars['Int']>,
  apiId_gte?: Maybe<Scalars['Int']>,
  apiSecret?: Maybe<Scalars['String']>,
  apiSecret_not?: Maybe<Scalars['String']>,
  apiSecret_in?: Maybe<Array<Scalars['String']>>,
  apiSecret_not_in?: Maybe<Array<Scalars['String']>>,
  apiSecret_lt?: Maybe<Scalars['String']>,
  apiSecret_lte?: Maybe<Scalars['String']>,
  apiSecret_gt?: Maybe<Scalars['String']>,
  apiSecret_gte?: Maybe<Scalars['String']>,
  apiSecret_contains?: Maybe<Scalars['String']>,
  apiSecret_not_contains?: Maybe<Scalars['String']>,
  apiSecret_starts_with?: Maybe<Scalars['String']>,
  apiSecret_not_starts_with?: Maybe<Scalars['String']>,
  apiSecret_ends_with?: Maybe<Scalars['String']>,
  apiSecret_not_ends_with?: Maybe<Scalars['String']>,
  organizationId?: Maybe<Scalars['Int']>,
  organizationId_not?: Maybe<Scalars['Int']>,
  organizationId_in?: Maybe<Array<Scalars['Int']>>,
  organizationId_not_in?: Maybe<Array<Scalars['Int']>>,
  organizationId_lt?: Maybe<Scalars['Int']>,
  organizationId_lte?: Maybe<Scalars['Int']>,
  organizationId_gt?: Maybe<Scalars['Int']>,
  organizationId_gte?: Maybe<Scalars['Int']>,
  active?: Maybe<Scalars['Boolean']>,
  active_not?: Maybe<Scalars['Boolean']>,
  logo?: Maybe<FileWhereInput>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  deletedAt?: Maybe<Scalars['DateTime']>,
  deletedAt_not?: Maybe<Scalars['DateTime']>,
  deletedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  deletedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  deletedAt_lt?: Maybe<Scalars['DateTime']>,
  deletedAt_lte?: Maybe<Scalars['DateTime']>,
  deletedAt_gt?: Maybe<Scalars['DateTime']>,
  deletedAt_gte?: Maybe<Scalars['DateTime']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  offers_every?: Maybe<OfferWhereInput>,
  offers_some?: Maybe<OfferWhereInput>,
  offers_none?: Maybe<OfferWhereInput>,
  projectId?: Maybe<Scalars['Int']>,
  projectId_not?: Maybe<Scalars['Int']>,
  projectId_in?: Maybe<Array<Scalars['Int']>>,
  projectId_not_in?: Maybe<Array<Scalars['Int']>>,
  projectId_lt?: Maybe<Scalars['Int']>,
  projectId_lte?: Maybe<Scalars['Int']>,
  projectId_gt?: Maybe<Scalars['Int']>,
  projectId_gte?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  description_not?: Maybe<Scalars['String']>,
  description_in?: Maybe<Array<Scalars['String']>>,
  description_not_in?: Maybe<Array<Scalars['String']>>,
  description_lt?: Maybe<Scalars['String']>,
  description_lte?: Maybe<Scalars['String']>,
  description_gt?: Maybe<Scalars['String']>,
  description_gte?: Maybe<Scalars['String']>,
  description_contains?: Maybe<Scalars['String']>,
  description_not_contains?: Maybe<Scalars['String']>,
  description_starts_with?: Maybe<Scalars['String']>,
  description_not_starts_with?: Maybe<Scalars['String']>,
  description_ends_with?: Maybe<Scalars['String']>,
  description_not_ends_with?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  url_not?: Maybe<Scalars['String']>,
  url_in?: Maybe<Array<Scalars['String']>>,
  url_not_in?: Maybe<Array<Scalars['String']>>,
  url_lt?: Maybe<Scalars['String']>,
  url_lte?: Maybe<Scalars['String']>,
  url_gt?: Maybe<Scalars['String']>,
  url_gte?: Maybe<Scalars['String']>,
  url_contains?: Maybe<Scalars['String']>,
  url_not_contains?: Maybe<Scalars['String']>,
  url_starts_with?: Maybe<Scalars['String']>,
  url_not_starts_with?: Maybe<Scalars['String']>,
  url_ends_with?: Maybe<Scalars['String']>,
  url_not_ends_with?: Maybe<Scalars['String']>,
  AND?: Maybe<Array<OrganizationWhereInput>>,
  OR?: Maybe<Array<OrganizationWhereInput>>,
  NOT?: Maybe<Array<OrganizationWhereInput>>,
};

export type OrganizationWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Query = {
   __typename?: 'Query',
  offers: Array<Offer>,
  offer: Offer,
  organization?: Maybe<Organization>,
  organizations: Array<Organization>,
  recentTransactions: Array<Transaction>,
  getTransactionStatus: Transaction,
  user: User,
};


export type QueryOfferArgs = {
  id: Scalars['ID']
};


export type QueryOrganizationArgs = {
  where: OrganizationWhereUniqueInput
};


export type QueryOrganizationsArgs = {
  where?: Maybe<OrganizationWhereInput>,
  orderBy?: Maybe<OrganizationOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryGetTransactionStatusArgs = {
  id: Scalars['ID']
};

export type Transaction = {
   __typename?: 'Transaction',
  id: Scalars['ID'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  donatedAmount?: Maybe<Scalars['Int']>,
  status: TransactionStatus,
  offer: Offer,
};

export enum TransactionOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  AmountAsc = 'amount_ASC',
  AmountDesc = 'amount_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  FirstNameAsc = 'firstName_ASC',
  FirstNameDesc = 'firstName_DESC',
  LastNameAsc = 'lastName_ASC',
  LastNameDesc = 'lastName_DESC',
  CommentAsc = 'comment_ASC',
  CommentDesc = 'comment_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  DonatedAmountAsc = 'donatedAmount_ASC',
  DonatedAmountDesc = 'donatedAmount_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC'
}

export enum TransactionStatus {
  Pending = 'PENDING',
  Paid = 'PAID',
  Failed = 'FAILED',
  Insufficient = 'INSUFFICIENT'
}

export type TransactionWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  amount?: Maybe<Scalars['Int']>,
  amount_not?: Maybe<Scalars['Int']>,
  amount_in?: Maybe<Array<Scalars['Int']>>,
  amount_not_in?: Maybe<Array<Scalars['Int']>>,
  amount_lt?: Maybe<Scalars['Int']>,
  amount_lte?: Maybe<Scalars['Int']>,
  amount_gt?: Maybe<Scalars['Int']>,
  amount_gte?: Maybe<Scalars['Int']>,
  email?: Maybe<Scalars['String']>,
  email_not?: Maybe<Scalars['String']>,
  email_in?: Maybe<Array<Scalars['String']>>,
  email_not_in?: Maybe<Array<Scalars['String']>>,
  email_lt?: Maybe<Scalars['String']>,
  email_lte?: Maybe<Scalars['String']>,
  email_gt?: Maybe<Scalars['String']>,
  email_gte?: Maybe<Scalars['String']>,
  email_contains?: Maybe<Scalars['String']>,
  email_not_contains?: Maybe<Scalars['String']>,
  email_starts_with?: Maybe<Scalars['String']>,
  email_not_starts_with?: Maybe<Scalars['String']>,
  email_ends_with?: Maybe<Scalars['String']>,
  email_not_ends_with?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  firstName_not?: Maybe<Scalars['String']>,
  firstName_in?: Maybe<Array<Scalars['String']>>,
  firstName_not_in?: Maybe<Array<Scalars['String']>>,
  firstName_lt?: Maybe<Scalars['String']>,
  firstName_lte?: Maybe<Scalars['String']>,
  firstName_gt?: Maybe<Scalars['String']>,
  firstName_gte?: Maybe<Scalars['String']>,
  firstName_contains?: Maybe<Scalars['String']>,
  firstName_not_contains?: Maybe<Scalars['String']>,
  firstName_starts_with?: Maybe<Scalars['String']>,
  firstName_not_starts_with?: Maybe<Scalars['String']>,
  firstName_ends_with?: Maybe<Scalars['String']>,
  firstName_not_ends_with?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  lastName_not?: Maybe<Scalars['String']>,
  lastName_in?: Maybe<Array<Scalars['String']>>,
  lastName_not_in?: Maybe<Array<Scalars['String']>>,
  lastName_lt?: Maybe<Scalars['String']>,
  lastName_lte?: Maybe<Scalars['String']>,
  lastName_gt?: Maybe<Scalars['String']>,
  lastName_gte?: Maybe<Scalars['String']>,
  lastName_contains?: Maybe<Scalars['String']>,
  lastName_not_contains?: Maybe<Scalars['String']>,
  lastName_starts_with?: Maybe<Scalars['String']>,
  lastName_not_starts_with?: Maybe<Scalars['String']>,
  lastName_ends_with?: Maybe<Scalars['String']>,
  lastName_not_ends_with?: Maybe<Scalars['String']>,
  comment?: Maybe<Scalars['String']>,
  comment_not?: Maybe<Scalars['String']>,
  comment_in?: Maybe<Array<Scalars['String']>>,
  comment_not_in?: Maybe<Array<Scalars['String']>>,
  comment_lt?: Maybe<Scalars['String']>,
  comment_lte?: Maybe<Scalars['String']>,
  comment_gt?: Maybe<Scalars['String']>,
  comment_gte?: Maybe<Scalars['String']>,
  comment_contains?: Maybe<Scalars['String']>,
  comment_not_contains?: Maybe<Scalars['String']>,
  comment_starts_with?: Maybe<Scalars['String']>,
  comment_not_starts_with?: Maybe<Scalars['String']>,
  comment_ends_with?: Maybe<Scalars['String']>,
  comment_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  deletedAt?: Maybe<Scalars['DateTime']>,
  deletedAt_not?: Maybe<Scalars['DateTime']>,
  deletedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  deletedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  deletedAt_lt?: Maybe<Scalars['DateTime']>,
  deletedAt_lte?: Maybe<Scalars['DateTime']>,
  deletedAt_gt?: Maybe<Scalars['DateTime']>,
  deletedAt_gte?: Maybe<Scalars['DateTime']>,
  donatedAmount?: Maybe<Scalars['Int']>,
  donatedAmount_not?: Maybe<Scalars['Int']>,
  donatedAmount_in?: Maybe<Array<Scalars['Int']>>,
  donatedAmount_not_in?: Maybe<Array<Scalars['Int']>>,
  donatedAmount_lt?: Maybe<Scalars['Int']>,
  donatedAmount_lte?: Maybe<Scalars['Int']>,
  donatedAmount_gt?: Maybe<Scalars['Int']>,
  donatedAmount_gte?: Maybe<Scalars['Int']>,
  status?: Maybe<TransactionStatus>,
  status_not?: Maybe<TransactionStatus>,
  status_in?: Maybe<Array<TransactionStatus>>,
  status_not_in?: Maybe<Array<TransactionStatus>>,
  offer?: Maybe<OfferWhereInput>,
  AND?: Maybe<Array<TransactionWhereInput>>,
  OR?: Maybe<Array<TransactionWhereInput>>,
  NOT?: Maybe<Array<TransactionWhereInput>>,
};


export type User = {
   __typename?: 'User',
  email: Scalars['String'],
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  adress?: Maybe<Adress>,
  fullName: Scalars['String'],
  shortName: Scalars['String'],
};

export enum UserRole {
  User = 'USER',
  Admin = 'ADMIN'
}

export type UserWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  email?: Maybe<Scalars['String']>,
  email_not?: Maybe<Scalars['String']>,
  email_in?: Maybe<Array<Scalars['String']>>,
  email_not_in?: Maybe<Array<Scalars['String']>>,
  email_lt?: Maybe<Scalars['String']>,
  email_lte?: Maybe<Scalars['String']>,
  email_gt?: Maybe<Scalars['String']>,
  email_gte?: Maybe<Scalars['String']>,
  email_contains?: Maybe<Scalars['String']>,
  email_not_contains?: Maybe<Scalars['String']>,
  email_starts_with?: Maybe<Scalars['String']>,
  email_not_starts_with?: Maybe<Scalars['String']>,
  email_ends_with?: Maybe<Scalars['String']>,
  email_not_ends_with?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  firstName_not?: Maybe<Scalars['String']>,
  firstName_in?: Maybe<Array<Scalars['String']>>,
  firstName_not_in?: Maybe<Array<Scalars['String']>>,
  firstName_lt?: Maybe<Scalars['String']>,
  firstName_lte?: Maybe<Scalars['String']>,
  firstName_gt?: Maybe<Scalars['String']>,
  firstName_gte?: Maybe<Scalars['String']>,
  firstName_contains?: Maybe<Scalars['String']>,
  firstName_not_contains?: Maybe<Scalars['String']>,
  firstName_starts_with?: Maybe<Scalars['String']>,
  firstName_not_starts_with?: Maybe<Scalars['String']>,
  firstName_ends_with?: Maybe<Scalars['String']>,
  firstName_not_ends_with?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  lastName_not?: Maybe<Scalars['String']>,
  lastName_in?: Maybe<Array<Scalars['String']>>,
  lastName_not_in?: Maybe<Array<Scalars['String']>>,
  lastName_lt?: Maybe<Scalars['String']>,
  lastName_lte?: Maybe<Scalars['String']>,
  lastName_gt?: Maybe<Scalars['String']>,
  lastName_gte?: Maybe<Scalars['String']>,
  lastName_contains?: Maybe<Scalars['String']>,
  lastName_not_contains?: Maybe<Scalars['String']>,
  lastName_starts_with?: Maybe<Scalars['String']>,
  lastName_not_starts_with?: Maybe<Scalars['String']>,
  lastName_ends_with?: Maybe<Scalars['String']>,
  lastName_not_ends_with?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  password_not?: Maybe<Scalars['String']>,
  password_in?: Maybe<Array<Scalars['String']>>,
  password_not_in?: Maybe<Array<Scalars['String']>>,
  password_lt?: Maybe<Scalars['String']>,
  password_lte?: Maybe<Scalars['String']>,
  password_gt?: Maybe<Scalars['String']>,
  password_gte?: Maybe<Scalars['String']>,
  password_contains?: Maybe<Scalars['String']>,
  password_not_contains?: Maybe<Scalars['String']>,
  password_starts_with?: Maybe<Scalars['String']>,
  password_not_starts_with?: Maybe<Scalars['String']>,
  password_ends_with?: Maybe<Scalars['String']>,
  password_not_ends_with?: Maybe<Scalars['String']>,
  role?: Maybe<UserRole>,
  role_not?: Maybe<UserRole>,
  role_in?: Maybe<Array<UserRole>>,
  role_not_in?: Maybe<Array<UserRole>>,
  offers_every?: Maybe<OfferWhereInput>,
  offers_some?: Maybe<OfferWhereInput>,
  offers_none?: Maybe<OfferWhereInput>,
  adress?: Maybe<AdressWhereInput>,
  AND?: Maybe<Array<UserWhereInput>>,
  OR?: Maybe<Array<UserWhereInput>>,
  NOT?: Maybe<Array<UserWhereInput>>,
};

export type UserQueryVariables = {};


export type UserQuery = (
  { __typename?: 'Query' }
  & { user: (
    { __typename?: 'User' }
    & Pick<User, 'email' | 'firstName' | 'lastName' | 'fullName'>
    & { adress: Maybe<(
      { __typename?: 'Adress' }
      & Pick<Adress, 'city' | 'street' | 'postalCode'>
    )> }
  ) }
);

export type OffersQueryVariables = {};


export type OffersQuery = (
  { __typename?: 'Query' }
  & { offers: Array<(
    { __typename?: 'Offer' }
    & Pick<Offer, 'id' | 'name' | 'price'>
    & { beneficator: (
      { __typename?: 'Organization' }
      & Pick<Organization, 'name'>
    ), gallery: (
      { __typename?: 'Gallery' }
      & { images: Maybe<Array<(
        { __typename?: 'File' }
        & Pick<File, 'key'>
      )>> }
    ) }
  )> }
);

export type OrganizationsQueryVariables = {};


export type OrganizationsQuery = (
  { __typename?: 'Query' }
  & { organizations: Array<(
    { __typename?: 'Organization' }
    & Pick<Organization, 'id' | 'name' | 'description' | 'url'>
    & { logo: (
      { __typename?: 'File' }
      & Pick<File, 'key'>
    ) }
  )> }
);

export type RecentTransactionsQueryVariables = {};


export type RecentTransactionsQuery = (
  { __typename?: 'Query' }
  & { recentTransactions: Array<(
    { __typename?: 'Transaction' }
    & Pick<Transaction, 'firstName' | 'donatedAmount'>
  )> }
);

export type CreateTransactionMutationVariables = {
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  email: Scalars['String'],
  comment?: Maybe<Scalars['String']>,
  amount: Scalars['Int'],
  offerId: Scalars['ID']
};


export type CreateTransactionMutation = (
  { __typename?: 'Mutation' }
  & { createTransaction: (
    { __typename?: 'Transaction' }
    & Pick<Transaction, 'id'>
    & { offer: (
      { __typename?: 'Offer' }
      & { beneficator: (
        { __typename?: 'Organization' }
        & Pick<Organization, 'projectId'>
      ) }
    ) }
  ) }
);

export type OfferQueryVariables = {
  id: Scalars['ID']
};


export type OfferQuery = (
  { __typename?: 'Query' }
  & { offer: (
    { __typename?: 'Offer' }
    & Pick<Offer, 'id' | 'name' | 'description' | 'price'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'shortName'>
    ), gallery: (
      { __typename?: 'Gallery' }
      & { images: Maybe<Array<(
        { __typename?: 'File' }
        & Pick<File, 'key'>
      )>> }
    ), beneficator: (
      { __typename?: 'Organization' }
      & Pick<Organization, 'name' | 'apiId'>
    ) }
  ) }
);

export type GetUserQueryVariables = {};


export type GetUserQuery = (
  { __typename?: 'Query' }
  & { user: (
    { __typename?: 'User' }
    & Pick<User, 'fullName'>
  ) }
);

export type UploadFileMutationVariables = {
  file: Scalars['Upload'],
  directory?: Maybe<Scalars['String']>
};


export type UploadFileMutation = (
  { __typename?: 'Mutation' }
  & { uploadFile: (
    { __typename?: 'File' }
    & Pick<File, 'id' | 'fileName' | 'key'>
  ) }
);

export type CreateOrganizationMutationVariables = {
  name: Scalars['String'],
  description: Scalars['String'],
  url: Scalars['String'],
  logoId: Scalars['ID'],
  apiId: Scalars['Int'],
  apiSecret: Scalars['String'],
  organizationId: Scalars['Int']
};


export type CreateOrganizationMutation = (
  { __typename?: 'Mutation' }
  & { createOrganization: (
    { __typename?: 'Organization' }
    & Pick<Organization, 'name'>
  ) }
);

export type CreateOfferMutationVariables = {
  name: Scalars['String'],
  description: Scalars['String'],
  organizationId: Scalars['ID'],
  price: Scalars['Int'],
  amount: Scalars['Int'],
  transport: Scalars['String'],
  publicOffer: Scalars['Boolean'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  email: Scalars['String'],
  images: Array<Scalars['ID']>
};


export type CreateOfferMutation = (
  { __typename?: 'Mutation' }
  & { createOffer: (
    { __typename?: 'Offer' }
    & Pick<Offer, 'id'>
  ) }
);

export type LoginMutationVariables = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'AuthPayload' }
    & Pick<AuthPayload, 'token'>
  ) }
);

export type UpdateUserMutationVariables = {
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  city: Scalars['String'],
  street: Scalars['String'],
  postalCode: Scalars['String']
};


export type UpdateUserMutation = (
  { __typename?: 'Mutation' }
  & { updateUser: (
    { __typename?: 'User' }
    & Pick<User, 'email' | 'firstName' | 'lastName' | 'fullName'>
    & { adress: Maybe<(
      { __typename?: 'Adress' }
      & Pick<Adress, 'city' | 'street' | 'postalCode'>
    )> }
  ) }
);

export type SignupMutationVariables = {
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  email: Scalars['String'],
  password: Scalars['String']
};


export type SignupMutation = (
  { __typename?: 'Mutation' }
  & { signup: (
    { __typename?: 'AuthPayload' }
    & Pick<AuthPayload, 'token'>
  ) }
);


export const UserDocument = gql`
    query user {
  user {
    email
    firstName
    lastName
    fullName
    adress {
      city
      street
      postalCode
    }
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UserQuery, UserQueryVariables>) {
        return ApolloReactHooks.useQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
      }
export function useUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = ApolloReactCommon.QueryResult<UserQuery, UserQueryVariables>;
export const OffersDocument = gql`
    query offers {
  offers {
    id
    name
    price
    beneficator {
      name
    }
    gallery {
      images {
        key
      }
    }
  }
}
    `;

/**
 * __useOffersQuery__
 *
 * To run a query within a React component, call `useOffersQuery` and pass it any options that fit your needs.
 * When your component renders, `useOffersQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOffersQuery({
 *   variables: {
 *   },
 * });
 */
export function useOffersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<OffersQuery, OffersQueryVariables>) {
        return ApolloReactHooks.useQuery<OffersQuery, OffersQueryVariables>(OffersDocument, baseOptions);
      }
export function useOffersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<OffersQuery, OffersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<OffersQuery, OffersQueryVariables>(OffersDocument, baseOptions);
        }
export type OffersQueryHookResult = ReturnType<typeof useOffersQuery>;
export type OffersLazyQueryHookResult = ReturnType<typeof useOffersLazyQuery>;
export type OffersQueryResult = ApolloReactCommon.QueryResult<OffersQuery, OffersQueryVariables>;
export const OrganizationsDocument = gql`
    query organizations {
  organizations {
    id
    name
    description
    url
    logo {
      key
    }
  }
}
    `;

/**
 * __useOrganizationsQuery__
 *
 * To run a query within a React component, call `useOrganizationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrganizationsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrganizationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useOrganizationsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<OrganizationsQuery, OrganizationsQueryVariables>) {
        return ApolloReactHooks.useQuery<OrganizationsQuery, OrganizationsQueryVariables>(OrganizationsDocument, baseOptions);
      }
export function useOrganizationsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<OrganizationsQuery, OrganizationsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<OrganizationsQuery, OrganizationsQueryVariables>(OrganizationsDocument, baseOptions);
        }
export type OrganizationsQueryHookResult = ReturnType<typeof useOrganizationsQuery>;
export type OrganizationsLazyQueryHookResult = ReturnType<typeof useOrganizationsLazyQuery>;
export type OrganizationsQueryResult = ApolloReactCommon.QueryResult<OrganizationsQuery, OrganizationsQueryVariables>;
export const RecentTransactionsDocument = gql`
    query recentTransactions {
  recentTransactions {
    firstName
    donatedAmount
  }
}
    `;

/**
 * __useRecentTransactionsQuery__
 *
 * To run a query within a React component, call `useRecentTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecentTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecentTransactionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useRecentTransactionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<RecentTransactionsQuery, RecentTransactionsQueryVariables>) {
        return ApolloReactHooks.useQuery<RecentTransactionsQuery, RecentTransactionsQueryVariables>(RecentTransactionsDocument, baseOptions);
      }
export function useRecentTransactionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<RecentTransactionsQuery, RecentTransactionsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<RecentTransactionsQuery, RecentTransactionsQueryVariables>(RecentTransactionsDocument, baseOptions);
        }
export type RecentTransactionsQueryHookResult = ReturnType<typeof useRecentTransactionsQuery>;
export type RecentTransactionsLazyQueryHookResult = ReturnType<typeof useRecentTransactionsLazyQuery>;
export type RecentTransactionsQueryResult = ApolloReactCommon.QueryResult<RecentTransactionsQuery, RecentTransactionsQueryVariables>;
export const CreateTransactionDocument = gql`
    mutation createTransaction($firstName: String!, $lastName: String!, $email: String!, $comment: String, $amount: Int!, $offerId: ID!) {
  createTransaction(firstName: $firstName, lastName: $lastName, email: $email, comment: $comment, amount: $amount, offerId: $offerId) {
    id
    offer {
      beneficator {
        projectId
      }
    }
  }
}
    `;
export type CreateTransactionMutationFn = ApolloReactCommon.MutationFunction<CreateTransactionMutation, CreateTransactionMutationVariables>;

/**
 * __useCreateTransactionMutation__
 *
 * To run a mutation, you first call `useCreateTransactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTransactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTransactionMutation, { data, loading, error }] = useCreateTransactionMutation({
 *   variables: {
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      email: // value for 'email'
 *      comment: // value for 'comment'
 *      amount: // value for 'amount'
 *      offerId: // value for 'offerId'
 *   },
 * });
 */
export function useCreateTransactionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateTransactionMutation, CreateTransactionMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateTransactionMutation, CreateTransactionMutationVariables>(CreateTransactionDocument, baseOptions);
      }
export type CreateTransactionMutationHookResult = ReturnType<typeof useCreateTransactionMutation>;
export type CreateTransactionMutationResult = ApolloReactCommon.MutationResult<CreateTransactionMutation>;
export type CreateTransactionMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateTransactionMutation, CreateTransactionMutationVariables>;
export const OfferDocument = gql`
    query offer($id: ID!) {
  offer(id: $id) {
    id
    name
    description
    price
    user {
      shortName
    }
    gallery {
      images {
        key
      }
    }
    beneficator {
      name
      apiId
    }
  }
}
    `;

/**
 * __useOfferQuery__
 *
 * To run a query within a React component, call `useOfferQuery` and pass it any options that fit your needs.
 * When your component renders, `useOfferQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOfferQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useOfferQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<OfferQuery, OfferQueryVariables>) {
        return ApolloReactHooks.useQuery<OfferQuery, OfferQueryVariables>(OfferDocument, baseOptions);
      }
export function useOfferLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<OfferQuery, OfferQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<OfferQuery, OfferQueryVariables>(OfferDocument, baseOptions);
        }
export type OfferQueryHookResult = ReturnType<typeof useOfferQuery>;
export type OfferLazyQueryHookResult = ReturnType<typeof useOfferLazyQuery>;
export type OfferQueryResult = ApolloReactCommon.QueryResult<OfferQuery, OfferQueryVariables>;
export const GetUserDocument = gql`
    query getUser {
  user {
    fullName
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        return ApolloReactHooks.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, baseOptions);
      }
export function useGetUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, baseOptions);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = ApolloReactCommon.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const UploadFileDocument = gql`
    mutation uploadFile($file: Upload!, $directory: String) {
  uploadFile(file: $file, directory: $directory) {
    id
    fileName
    key
  }
}
    `;
export type UploadFileMutationFn = ApolloReactCommon.MutationFunction<UploadFileMutation, UploadFileMutationVariables>;

/**
 * __useUploadFileMutation__
 *
 * To run a mutation, you first call `useUploadFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadFileMutation, { data, loading, error }] = useUploadFileMutation({
 *   variables: {
 *      file: // value for 'file'
 *      directory: // value for 'directory'
 *   },
 * });
 */
export function useUploadFileMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UploadFileMutation, UploadFileMutationVariables>) {
        return ApolloReactHooks.useMutation<UploadFileMutation, UploadFileMutationVariables>(UploadFileDocument, baseOptions);
      }
export type UploadFileMutationHookResult = ReturnType<typeof useUploadFileMutation>;
export type UploadFileMutationResult = ApolloReactCommon.MutationResult<UploadFileMutation>;
export type UploadFileMutationOptions = ApolloReactCommon.BaseMutationOptions<UploadFileMutation, UploadFileMutationVariables>;
export const CreateOrganizationDocument = gql`
    mutation createOrganization($name: String!, $description: String!, $url: String!, $logoId: ID!, $apiId: Int!, $apiSecret: String!, $organizationId: Int!) {
  createOrganization(name: $name, description: $description, url: $url, logoId: $logoId, active: true, apiId: $apiId, apiSecret: $apiSecret, organizationId: $organizationId) {
    name
  }
}
    `;
export type CreateOrganizationMutationFn = ApolloReactCommon.MutationFunction<CreateOrganizationMutation, CreateOrganizationMutationVariables>;

/**
 * __useCreateOrganizationMutation__
 *
 * To run a mutation, you first call `useCreateOrganizationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrganizationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrganizationMutation, { data, loading, error }] = useCreateOrganizationMutation({
 *   variables: {
 *      name: // value for 'name'
 *      description: // value for 'description'
 *      url: // value for 'url'
 *      logoId: // value for 'logoId'
 *      apiId: // value for 'apiId'
 *      apiSecret: // value for 'apiSecret'
 *      organizationId: // value for 'organizationId'
 *   },
 * });
 */
export function useCreateOrganizationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateOrganizationMutation, CreateOrganizationMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateOrganizationMutation, CreateOrganizationMutationVariables>(CreateOrganizationDocument, baseOptions);
      }
export type CreateOrganizationMutationHookResult = ReturnType<typeof useCreateOrganizationMutation>;
export type CreateOrganizationMutationResult = ApolloReactCommon.MutationResult<CreateOrganizationMutation>;
export type CreateOrganizationMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateOrganizationMutation, CreateOrganizationMutationVariables>;
export const CreateOfferDocument = gql`
    mutation createOffer($name: String!, $description: String!, $organizationId: ID!, $price: Int!, $amount: Int!, $transport: String!, $publicOffer: Boolean!, $firstName: String!, $lastName: String!, $email: String!, $images: [ID!]!) {
  createOffer(name: $name, description: $description, organizationId: $organizationId, price: $price, amount: $amount, transport: $transport, publicOffer: $publicOffer, firstName: $firstName, lastName: $lastName, email: $email, images: $images) {
    id
  }
}
    `;
export type CreateOfferMutationFn = ApolloReactCommon.MutationFunction<CreateOfferMutation, CreateOfferMutationVariables>;

/**
 * __useCreateOfferMutation__
 *
 * To run a mutation, you first call `useCreateOfferMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOfferMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOfferMutation, { data, loading, error }] = useCreateOfferMutation({
 *   variables: {
 *      name: // value for 'name'
 *      description: // value for 'description'
 *      organizationId: // value for 'organizationId'
 *      price: // value for 'price'
 *      amount: // value for 'amount'
 *      transport: // value for 'transport'
 *      publicOffer: // value for 'publicOffer'
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      email: // value for 'email'
 *      images: // value for 'images'
 *   },
 * });
 */
export function useCreateOfferMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateOfferMutation, CreateOfferMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateOfferMutation, CreateOfferMutationVariables>(CreateOfferDocument, baseOptions);
      }
export type CreateOfferMutationHookResult = ReturnType<typeof useCreateOfferMutation>;
export type CreateOfferMutationResult = ApolloReactCommon.MutationResult<CreateOfferMutation>;
export type CreateOfferMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateOfferMutation, CreateOfferMutationVariables>;
export const LoginDocument = gql`
    mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
  }
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const UpdateUserDocument = gql`
    mutation updateUser($firstName: String!, $lastName: String!, $city: String!, $street: String!, $postalCode: String!) {
  updateUser(firstName: $firstName, lastName: $lastName, city: $city, street: $street, postalCode: $postalCode) {
    email
    firstName
    lastName
    fullName
    adress {
      city
      street
      postalCode
    }
  }
}
    `;
export type UpdateUserMutationFn = ApolloReactCommon.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      city: // value for 'city'
 *      street: // value for 'street'
 *      postalCode: // value for 'postalCode'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, baseOptions);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = ApolloReactCommon.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const SignupDocument = gql`
    mutation signup($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
  signup(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
    token
  }
}
    `;
export type SignupMutationFn = ApolloReactCommon.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        return ApolloReactHooks.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, baseOptions);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = ApolloReactCommon.MutationResult<SignupMutation>;
export type SignupMutationOptions = ApolloReactCommon.BaseMutationOptions<SignupMutation, SignupMutationVariables>;