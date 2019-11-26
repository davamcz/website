import mjml2html from 'mjml';
export const transactionCreatedBuyer = (data) => mjml2html(`
  <mjml>
    <mj-body>
      <mj-section>
        <mj-column>
          <mj-text>
            co to sakra?
            ${data.creatorFirstName}
          </mj-text>
        </mj-column>
      </mj-section>
    </mj-body>
  </mjml>
`);
