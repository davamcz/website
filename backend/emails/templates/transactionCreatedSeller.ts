import mjml2html from 'mjml';
export const transactionCreatedSeller = (data) => mjml2html(`
<mjml>
    <mj-head>
      <mj-attributes>
        <mj-all font-family="HelveticaNeue" />
        <mj-all font-size="22px" line-height="1.55" color="#2f2f2f" /> 
      </mj-attributes>
      <mj-style inline="inline">
        .lighter-text div {
          opacity: 0.6;
        }
      </mj-style>
      <mj-style inline="inline">
        h1 {
          color: #ff9168;
          font-size: 32px;
          margin-bottom: 35px
        }
      </mj-style>
      <mj-style inline="inline">
        .offer-link div {
          font-size: 18px !important;
          border: 1px solid #2f2f2f;
          border-radius: 4px;
          background: rgba(255, 145, 104, .4);
          padding: 15px;
          font-style: italic;
        }
      </mj-style>
    </mj-head>
    <mj-body background-color="#f0f0f0" width="1200px">
      <mj-section>
        <mj-column>
          <mj-image align="left" width="260px" src="https://davamcz-images.s3.eu-central-1.amazonaws.com/mailing/ezgif.com-gif-maker.png" padding="0" padding-top="50px" />
        </mj-column>
        <mj-column>
          <!-- here will be link for email in the browser -->
          <mj-text></mj-text>
        </mj-column>
      </mj-section>
      <mj-wrapper background-color="#fff" padding="3% 8%">
        <mj-section>
          <mj-column>
            <mj-text padding="0">
              <h1>Hurá! Dobrý skutek je dokonán :-)</h1>
              Skvělá zpráva, ${data.salutation},<br /><br />
              někdo právě daroval peníze dobročinné organizaci ${data.ngo} proto aby získal Váš
              produkt. Spojte se a domluvte si další postup.
            </mj-text>
          </mj-column>
        </mj-section>
        
        <mj-section>
          <mj-column width="30%">
            <mj-image align="left" width="200px" padding="0" src=${data.imgUrl} />
          </mj-column>
          <mj-column  width="70%">
            <mj-text>
              Jméno dárce: <strong>${data.buyerFirstName} ${data.buyerLastName}</strong> <br />
              E-mail dárce: <strong>${data.buyerEmail}</strong>
              Položka: <strong>${data.product}</strong> <br />
              Darováno: <strong>${data.price} Kč</strong> <br />
              Příjemce finančních prostředků: <strong>${data.ngo}</strong> <br />
              Množství: <strong>${data.amount} ks</strong> <br />
            </mj-text>
          </mj-column>
        </mj-section>
        
        <mj-section>
          <mj-column>
            <mj-text padding="0">
              V případě jakéhokoliv dotazu nás neváhejte kontaktovat 
              e-mailem na adresu <a href="mailto: info@davam.cz">info@davam.cz</a>.<br /><br />
              Za tým Dávám.cz<br />
              Jindřich Košťál<br />
              předseda spolku
            </mj-text>
          </mj-column>
        </mj-section>

        </mj-wrapper>  
      <mj-section>
        <mj-column vertical-align="top">
          <mj-text css-class="lighter-text" padding="0" line-height="125%">
            Sledujte nás na sociálních sítích
          </mj-text>
          <mj-social align="left" padding-left="0" font-size="15px" icon-size="30px" mode="horizontal">
            <mj-social-element
              icon-size="48px"
              src="https://davamcz-images.s3.eu-central-1.amazonaws.com/mailing/facebook%403x.png"
              name="facebook-noshare"
              alt="facebook"
              href="https://www.facebook.com/davamcz/"
              background-color="#f0f0f0"
            />
            <mj-social-element
              icon-size="48px"
              src="https://davamcz-images.s3.eu-central-1.amazonaws.com/mailing/twitter%403x.png"
              name="twitter-noshare"
              alt="twitter"
              href="https://twitter.com/Davamcz"
              background-color="#f0f0f0"
            />
          </mj-social>
        </mj-column>  
        <mj-column vertical-align="top">
          <mj-text css-class="lighter-text" padding="0" line-height="125%">
            Copyright &copy; 2019 Dávám.cz All rights reserved.
          </mj-text>
        </mj-column>
      </mj-section>        

    </mj-body>
  </mjml>
`);
