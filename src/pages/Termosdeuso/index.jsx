import React from "react";
import { Button, Img, List, Text } from "components";
import "../../styles/font.css"

const TermosdeusoPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-arboria items-start justify-end mx-auto py-14 w-full">
        <div className="flex flex-col items-start justify-end mt-[51px] md:px-5 px-[55px] py-6 w-auto sm:w-full">
          <Img
            src="images/img_logoprincipallaranja_blue_gray_900.svg"
            className="h-10 w-[262px]"
            alt="logoprincipalla"
          />
        </div>
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col gap-12 items-center justify-start max-w-7xl md:px-10 px-20 sm:px-5 py-12 w-full">
            <Text
              className="font-normal text-center text-deep_orange_A400 tracking-[2.00px] w-auto"
              as="h3"
              variant="h3"
            >
              Termo de Uso e Política de Privacidade
            </Text>
            <div className="flex flex-col gap-12 items-center justify-start max-w-[1120px] mx-auto w-full">
              <List
                className="flex-col gap-12 grid items-center w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-col gap-4 items-start justify-start my-0 w-full">
                  <Text
                    className="font-arboria font-normal text-deep_orange_A400 tracking-[2.00px] w-full"
                    as="h5"
                    variant="h5"
                  >
                   1
                  </Text>
                  <Text
                    className="font-arboria leading-[33.00px] max-w-[1120px] md:max-w-full text-blue_gray_900"
                    variant="body2"
                  >
                    Aceitação dos Termos Ao acessar e utilizar nosso site, você concorda em cumprir integralmente estes termos e condições. Se você não concordar com estes termos, pedimos que não utilize nosso site.
                  </Text>
                </div>

                <div className="flex flex-1 flex-col gap-4 items-start justify-start my-0 w-full">
                  <Text
                    className="font-arboria font-normal text-deep_orange_A400 tracking-[2.00px] w-full"
                    as="h5"
                    variant="h5"
                  >
                    2
                  </Text>
                  <Text
                    className="font-arboria leading-[33.00px] max-w-[1120px] md:max-w-full text-blue_gray_900"
                    variant="body2"
                  >
                    Coleta de Informações Durante a interação com nosso site, poderemos coletar as seguintes informações:
                  </Text>
                  <Text
                    className="font-arboria font-normal text-deep_orange_A400 tracking-[2.00px] w-full"
                    as="h5"
                    variant="h5"
                  >
                    2.1
                  </Text>
                  <Text
                    className="font-arboria leading-[33.00px] max-w-[1120px] md:max-w-full text-blue_gray_900"
                    variant="body2"
                  >
                    Informações de Contato Coletamos informações de contato, como nome, endereço de e-mail e número de telefone, quando você voluntariamente as fornece por meio de formulários de contato ou outros meios de comunicação disponibilizados em nosso site.
                  </Text>
                  <Text
                    className="font-arboria font-normal text-deep_orange_A400 tracking-[2.00px] w-full"
                    as="h5"
                    variant="h5"
                  >
                    2.2
                  </Text>
                  <Text
                    className="font-arboria leading-[33.00px] max-w-[1120px] md:max-w-full text-blue_gray_900"
                    variant="body2"
                  >
                    Outras Informações Fornecidas Voluntariamente Além das informações de contato, também podemos coletar outras informações que você fornece voluntariamente, como detalhes sobre sua empresa, setor de atuação, interesse específico em nossos serviços e outras informações relevantes.
                  </Text>
                 
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start my-0 w-full">
                  <Text
                    className="font-arboria font-normal text-deep_orange_A400 tracking-[2.00px] w-full"
                    as="h5"
                    variant="h5"
                  >
                    3
                  </Text>
                  <Text
                    className="font-arboria leading-[33.00px] max-w-[1120px] md:max-w-full text-blue_gray_900"
                    variant="body2"
                  >
                    Uso das Informações As informações coletadas são utilizadas para os seguintes propósitos:
                  </Text>
                  <Text
                    className="font-arboria font-normal text-deep_orange_A400 tracking-[2.00px] w-full"
                    as="h5"
                    variant="h5"
                  >
                    3.1
                  </Text>
                  <Text
                    className="font-arboria leading-[33.00px] max-w-[1120px] md:max-w-full text-blue_gray_900"
                    variant="body2"
                  >
                    Comunicação e Resposta Utilizamos suas informações de contato para entrar em contato com você e responder às suas solicitações, dúvidas e consultas.
                  </Text>
                  <Text
                    className="font-arboria font-normal text-deep_orange_A400 tracking-[2.00px] w-full"
                    as="h5"
                    variant="h5"
                  >
                    3.2
                  </Text>
                  <Text
                    className="font-arboria leading-[33.00px] max-w-[1120px] md:max-w-full text-blue_gray_900"
                    variant="body2"
                  >
                  Fornecimento de Informações e Atualizações Podemos utilizar suas informações para fornecer informações sobre nossos serviços, produtos, atualizações relevantes e ofertas especiais.                  </Text>
                  <Text
                    className="font-arboria font-normal text-deep_orange_A400 tracking-[2.00px] w-full"
                    as="h5"
                    variant="h5"
                  >
                    3.3
                  </Text>
                  <Text
                    className="font-arboria leading-[33.00px] max-w-[1120px] md:max-w-full text-blue_gray_900"
                    variant="body2"
                  >
                    Personalização da Experiência do Usuário Utilizamos as informações coletadas para personalizar e aprimorar sua experiência no site, oferecendo conteúdo e recursos mais relevantes para suas necessidades e interesses específicos.                  </Text>
                  <Text
                    className="font-arboria font-normal text-deep_orange_A400 tracking-[2.00px] w-full"
                    as="h5"
                    variant="h5"
                  >
                    3.4
                  </Text>
                  <Text
                    className="font-arboria leading-[33.00px] max-w-[1120px] md:max-w-full text-blue_gray_900"
                    variant="body2"
                  >
                    Cumprimento de Obrigações Legais Podemos utilizar as informações coletadas para cumprir com obrigações legais, regulatórias ou solicitações governamentais aplicáveis.                  </Text>
                  
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start my-0 w-full">
                  <Text
                    className="font-arboria font-normal text-deep_orange_A400 tracking-[2.00px] w-full"
                    as="h5"
                    variant="h5"
                  >
                    4
                  </Text>
                  <Text
                    className="font-arboria leading-[33.00px] max-w-[1120px] md:max-w-full text-blue_gray_900"
                    variant="body2"
                  >
                    Compartilhamento de Informações Não compartilharemos suas informações pessoais com terceiros, exceto nos seguintes casos:
                  </Text>

                  <Text
                    className="font-arboria font-normal text-deep_orange_A400 tracking-[2.00px] w-full"
                    as="h5"
                    variant="h5"
                  >
                    4.1
                  </Text>
                  <Text
                    className="font-arboria leading-[33.00px] max-w-[1120px] md:max-w-full text-blue_gray_900"
                    variant="body2"
                  >
                    Prestadores de Serviços Terceirizados Podemos compartilhar suas informações com prestadores de serviços terceirizados que nos auxiliam na operação do site, processamento de pagamentos, envio de comunicações por e-mail e outras atividades relacionadas aos nossos serviços.                  </Text>

                  <Text
                    className="font-arboria font-normal text-deep_orange_A400 tracking-[2.00px] w-full"
                    as="h5"
                    variant="h5"
                  >
                    4.2
                  </Text>
                  <Text
                    className="font-arboria leading-[33.00px] max-w-[1120px] md:max-w-full text-blue_gray_900"
                    variant="body2"
                  >
                    Consentimento Explícito Com seu consentimento explícito, poderemos compartilhar suas informações com parceiros de negócios selecionados para fins de marketing ou outras finalidades específicas.                  </Text>
                  <Text
                    className="font-arboria font-normal text-deep_orange_A400 tracking-[2.00px] w-full"
                    as="h5"
                    variant="h5"
                  >
                    4.3
                  </Text>
                  <Text
                    className="font-arboria leading-[33.00px] max-w-[1120px] md:max-w-full text-blue_gray_900"
                    variant="body2"
                  >
                    Requisitos Legais Reservamo-nos o direito de compartilhar suas informações pessoais quando exigido por lei, regulamentação ou solicitação governamental, a fim de cumprir com obrigações legais.
                  </Text>
                 
                </div>

                <div className="flex flex-1 flex-col gap-4 items-start justify-start my-0 w-full">
                  <Text
                    className="font-arboria font-normal text-deep_orange_A400 tracking-[2.00px] w-full"
                    as="h5"
                    variant="h5"
                  >
                    5. Segurança de Dados 
                  </Text>
                  <Text
                    className="font-arboria leading-[33.00px] max-w-[1120px] md:max-w-full text-blue_gray_900"
                    variant="body2"
                  >
                    Empregamos medidas de segurança apropriadas para proteger suas informações contra acesso não autorizado, uso indevido, alteração ou divulgação. No entanto, é importante ressaltar que nenhum sistema de segurança é completamente infalível, e não podemos garantir a segurança absoluta de suas informações.
                  </Text>
                </div>

                <div className="flex flex-1 flex-col gap-4 items-start justify-start my-0 w-full">
                  <Text
                    className="font-arboria font-normal text-deep_orange_A400 tracking-[2.00px] w-full"
                    as="h5"
                    variant="h5"
                  >
                    6 . Cookies e Tecnologias de Rastreamento 
                  </Text>
                  <Text
                    className="font-arboria leading-[33.00px] max-w-[1120px] md:max-w-full text-blue_gray_900"
                    variant="body2"
                  >
                    Nosso site utiliza cookies e outras tecnologias de rastreamento para melhorar sua experiência e coletar informações estatísticas sobre o uso do site. Você pode controlar as configurações de cookies por meio das opções do seu navegador.
                  </Text>
                </div>

                <div className="flex flex-1 flex-col gap-4 items-start justify-start my-0 w-full">
                  <Text
                    className="font-arboria font-normal text-deep_orange_A400 tracking-[2.00px] w-full"
                    as="h5"
                    variant="h5"
                  >
                    7. Propriedade Intelectual 
                  </Text>
                  <Text
                    className="font-arboria leading-[33.00px] max-w-[1120px] md:max-w-full text-blue_gray_900"
                    variant="body2"
                  >
                    Todos os direitos autorais e propriedade intelectual relacionados ao conteúdo do site, incluindo textos, imagens, logotipos e design, são de nossa propriedade exclusiva. É proibido reproduzir, distribuir ou utilizar o conteúdo sem nossa autorização prévia por escrito.
                  </Text>
                </div>

                <div className="flex flex-1 flex-col gap-4 items-start justify-start my-0 w-full">
                  <Text
                    className="font-arboria font-normal text-deep_orange_A400 tracking-[2.00px] w-full"
                    as="h5"
                    variant="h5"
                  >
                    8. Modificações dos Termos 
                  </Text>
                  <Text
                    className="font-arboria leading-[33.00px] max-w-[1120px] md:max-w-full text-blue_gray_900"
                    variant="body2"
                  >
                   Reservamos o direito de modificar estes termos a qualquer momento, notificando os usuários por meio do site ou por outros meios apropriados. Recomendamos que você revise periodicamente este documento para estar ciente de eventuais alterações
                  </Text>
                </div>

                <div className="flex flex-1 flex-col gap-4 items-start justify-start my-0 w-full">
                  <Text
                    className="font-arboria font-normal text-deep_orange_A400 tracking-[2.00px] w-full"
                    as="h5"
                    variant="h5"
                  >
                   9. Contato 
                  </Text>
                  <Text
                    className="font-arboria leading-[33.00px] max-w-[1120px] md:max-w-full text-blue_gray_900"
                    variant="body2"
                  >
                    Se você tiver alguma dúvida ou preocupação em relação a estes termos ou à nossa política de privacidade, entre em contato conosco por meio das informações fornecidas no site.
                  </Text>


                  <Text
                    className="font-arboria leading-[33.00px] max-w-[1120px] md:max-w-full text-blue_gray_900"
                    variant="body2"
                  >
                   Ao utilizar nosso site, você confirma que leu, compreendeu e concorda com estes termos e condições.
                  </Text>
                </div>




                
              </List>
              <div className="flex flex-row gap-6 items-start justify-start w-auto">
              <a href="/contato">
                <Button
              
                  className="cursor-pointer font-arboria font-normal min-w-[146px] text-base text-center text-gray_100"
                  shape="CircleBorder20"
                  size="md"
                  variant="FillGray400"
                >
                  Recusar termos
                </Button>
                </a>
                <a href="/contato">
                <Button
                  className="cursor-pointer font-arboria font-normal text-base text-blue_gray_900 text-center w-[146px]"
                  shape="CircleBorder20"
                  size="md"
                  variant="FillYellow700"
                >
                  Aceitar termos
                </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermosdeusoPage;
