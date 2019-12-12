import { Container } from '../Container'
import { Faq } from './Faq'

export const FAQ = () => {
  return (
    <Container direction={['column', 'column', 'row']} style={{ flexWrap: 'wrap' }}>
      <Faq
        question="Kdo vybírá, jaké organizaci peníze půjdou?"
        answer="Výběr dobročinné organizace je v rukou Dobromana – člověka, který nabízí svou věc nebo službu."
      />
      <Faq
        question="Co je možné darovat?"
        answer="Darovat můžete jakoukoli věc nebo službu. Nabídnuté věci by měly být v takovém stavu, jak byste si i Vy sami přáli je dostat – čili čisté a funkční. V případě, že Vámi věnovaný produkt nějaké ty mouchy přece jen má, buďte fér a napište to do popisku. Také byste jistě byli neradi, kdybyste si pořídili děravý stan nebo nefunkční hodinky. Za službu jsou považovány nejrůznější formy věnovaní Vašeho času a schopností – tedy výukové lekce, přednášky, koncerty, výrobky aj. Prosíme, nenabízejte přes tento portál věci vulgární, neetické nebo nebezpečné."
      />
      <Faq
        question="Je platba bezpečná?"
        answer="Ano, využíváme platformu pro online dárcovství darujme.cz, splňující nejnovější standardy karetních asociací – 3D Secure, umožňující bezpečné platby kartou na internetu. Údaje o platební kartě nesdělujete nám, ale zadáváte je přímo bance."
      />
      <Faq
        question="Co je to platební odkaz?"
        answer="Platební odkaz, který můžete pomocí naší platformy vygenerovat, slouží k provedení platby za nabízené věci nebo služby. Peníze poté putují přímo na bankovní účet vybrané dobročinné organizace. Vy o této platbě dostanete potvrzení."
      />
      <Faq
        question="Jak velkou částku dostane nezisková organizace?"
        answer="Nezisková organizace získá celou částku uvedenou jako cena produktu/služby."
      />
      <Faq
        question="Účtujete si za služby poplatky?"
        answer="Dávám.cz je dobročinný a dobrovolný projekt, v žádném okamžiku nedisponujeme finančními prostředky dárce a neúčtujeme si žádné poplatky."
      />
      <Faq
        question="Mohu u Vás reklamovat obdržené zboží nebo službu?"
        answer="Dávám.cz neručí za přislíbené zboží ani služby. Před provedením platby doporučujeme dárce kontaktovat a domluvit se na detailech předání zboží či poskytnutí služby."
      />
    </Container>
  )
}
