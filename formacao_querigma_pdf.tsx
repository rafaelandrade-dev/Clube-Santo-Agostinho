import React from 'react';
import { BookOpen, Heart, Cross, MessageCircle } from 'lucide-react';

export default function MaterialFormacao() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-lg">
        {/* Capa */}
        <div className="bg-gradient-to-br from-amber-900 to-orange-800 text-white p-12 rounded-t-lg">
          <div className="text-center">
            <Cross className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">O Querigma nas Cartas de Paulo</h1>
            <p className="text-xl mb-2">Material de Apoio à Formação</p>
            <p className="text-lg opacity-90">Clube Santo Agostinho</p>
            <div className="mt-8 pt-8 border-t border-white/30">
              <p className="text-sm italic">"Ai de mim, se não evangelizar!" (1Cor 9,16)</p>
            </div>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="p-12 space-y-12">
          
          {/* Introdução */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-8 h-8 text-amber-700" />
              <h2 className="text-3xl font-bold text-amber-900">Apresentação</h2>
            </div>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <h3 className="text-xl font-semibold text-amber-800 mt-6">O imperativo formativo</h3>
              <p>
                Este material acompanha nossa formação sobre o querigma — o primeiro anúncio — nas cartas de Paulo. 
                Nosso objetivo não é apenas estudar conceitos teológicos, mas encontrar a Pessoa que transformou 
                radicalmente a vida do maior perseguidor da Igreja primitiva.
              </p>
              <p>
                Paulo de Tarso não é apenas um teólogo brilhante ou um missionário incansável. Ele é, antes de tudo, 
                um homem que foi alcançado pelo amor ágape de Deus. Sua vida e suas cartas são testemunho vivo dessa 
                experiência transformadora: de perseguidor a apóstolo, de defensor da Lei a arauto da Graça.
              </p>

              <h3 className="text-xl font-semibold text-amber-800 mt-6">O que pretendemos com esta formação?</h3>
              <p>
                Queremos percorrer três momentos essenciais da trajetória paulina que iluminam sua pregação e 
                fundamentam sua teologia:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Formação:</strong> de Tarso a Jerusalém — o terreno humano e cultural que moldou Saulo</li>
                <li><strong>Conversão:</strong> o encontro com Cristo no caminho de Damasco e os anos de silêncio</li>
                <li><strong>Amor:</strong> o coração do querigma paulino — Deus é amor, e esse amor tudo transforma</li>
              </ul>
              <p>
                O livro de Tamancoldi combina história, teologia e contexto cultural, preparando-nos para entender 
                não apenas o que Paulo escreveu, mas por que ele se tornou o que se tornou: apóstolo das nações 
                e cantor do amor de Deus.
              </p>
            </div>
          </section>

          {/* Capítulo 1 */}
          <section className="border-t-4 border-amber-300 pt-8">
            <div className="flex items-center gap-3 mb-6">
              <MessageCircle className="w-8 h-8 text-amber-700" />
              <h2 className="text-3xl font-bold text-amber-900">Capítulo 1</h2>
            </div>
            <h3 className="text-2xl font-semibold text-amber-800 mb-6">Saulo, dos primeiros estudos à conversão</h3>
            
            <div className="space-y-8 text-gray-700 leading-relaxed">
              
              <div>
                <h4 className="text-lg font-semibold text-amber-700 mb-3">Aos pés do Monte Taurus</h4>
                <p className="mb-3">
                  Saulo nasceu em Tarso, importante cidade da Cilícia, aos pés do imponente Monte Taurus. 
                  Tarso não era uma cidade qualquer: era um centro próspero, cosmopolita e culturalmente 
                  influente, profundamente marcado pelo helenismo e pelo acesso privilegiado ao saber greco-romano.
                </p>
                <p className="mb-3">
                  A família de Saulo pertencia à diáspora judaica — judeus que viviam fora da Palestina, mas que 
                  mantinham rigoroso compromisso com as tradições ancestrais. Seu pai possuía cidadania romana, 
                  uma vantagem estratégica que mais tarde seria instrumento providencial na missão do apóstolo.
                </p>
                <p>
                  Crescendo nesse ambiente, Saulo tornou-se bilíngue desde a infância: falava hebraico e aramaico 
                  no lar e na sinagoga, mas dominava o grego nas ruas e no convívio social. Essa dupla formação 
                  cultural explica sua singular capacidade de dialogar tanto com judeus quanto com gentios, 
                  transitando com naturalidade entre o mundo da Lei e o mundo da filosofia helênica.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-amber-700 mb-3">De artesão a rabino</h4>
                <p className="mb-3">
                  A formação de Saulo não se limitou aos livros. Seguindo a tradição judaica, todo menino 
                  aprendia um ofício manual, e Saulo tornou-se fabricante de tendas. O trabalho era honrado, 
                  não desprezado; mantinha-o conectado à realidade social concreta e ao cotidiano das pessoas comuns.
                </p>
                <p className="mb-3">
                  Paralelamente ao ofício, iniciou-se na rigorosa formação rabínica: dedicação à Torá, memorização 
                  intensiva das Escrituras, exercícios de debate e interpretação textual. A educação rabínica não 
                  era apenas informativa; era formativa — moldava o caráter, a disciplina e a capacidade de 
                  argumentação sistemática.
                </p>
                <p>
                  O resultado foi uma mente analítica aliada à experiência prática, um equilíbrio raro que 
                  marcará profundamente suas cartas: teologia profunda expressa em linguagem acessível, 
                  com exemplos tirados da vida cotidiana.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-amber-700 mb-3">A "lei oral"</h4>
                <p className="mb-3">
                  A formação rabínica de Saulo não se restringia ao texto escrito da Torá. Havia um corpo 
                  interpretativo fundamental, transmitido de mestre a discípulo: a Lei oral. Para os fariseus, 
                  essa tradição tinha autoridade equivalente à própria Lei escrita.
                </p>
                <p className="mb-3">
                  A Lei oral regulamentava minuciosamente a vida religiosa: regras sobre pureza ritual, 
                  observância do sábado, leis alimentares, preceitos sobre ofertas e sacrifícios. Nada ficava 
                  ao acaso; tudo estava detalhadamente prescrito.
                </p>
                <p>
                  Essa mentalidade moldou profundamente Saulo: a salvação estava ligada à observância rigorosa, 
                  e o zelo pela tradição tornava-se zelo pela própria identidade de Israel. Sob essa ótica, 
                  qualquer desvio — especialmente a crença num Messias crucificado — não era apenas erro 
                  teológico, mas ameaça existencial à fé ancestral.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-amber-700 mb-3">Aos pés de Gamaliel</h4>
                <p className="mb-3">
                  Para completar sua formação, Saulo foi enviado a Jerusalém, onde estudou aos pés de Gamaliel, 
                  um dos maiores mestres rabínicos de sua geração. Gamaliel era membro do Sinédrio, reconhecido 
                  por sua sabedoria e por seu método dialógico de ensino, que privilegiava o debate e a 
                  argumentação rigorosa.
                </p>
                <p className="mb-3">
                  A experiência em Jerusalém não foi apenas acadêmica. Saulo viveu na capital religiosa, 
                  conviveu com o Templo, participou dos processos e debates religiosos, respirou o espírito 
                  da cidade santa. Sua identidade farisaica consolidou-se ali de forma definitiva.
                </p>
                <p>
                  Foi nesse período que Saulo se tornou plenamente capaz de "defender a Lei". Ele não era um 
                  estudante mediano; era um fariseu zeloso, convicto, preparado para proteger com todas as forças 
                  aquilo que considerava sagrado. Essa formação explica sua reação violenta ao cristianismo nascente.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-amber-700 mb-3">Estêvão, um espinho na carne</h4>
                <p className="mb-3">
                  O conflito tornou-se inevitável. Os seguidores de Jesus proclamavam algo inaceitável para 
                  a mentalidade farisaica: um crucificado como Messias. A cruz, segundo Deuteronômio 21,23, 
                  era sinal de maldição divina: "Maldito todo aquele que for pendurado no madeiro."
                </p>
                <p className="mb-3">
                  Como aceitar que o Ungido de Deus pudesse morrer da forma mais humilhante e amaldiçoada? 
                  Para Saulo, isso não era apenas heresia — era blasfêmia que ameaçava a própria essência da 
                  fé de Israel.
                </p>
                <p className="mb-3">
                  Estêvão, um dos primeiros diáconos, foi preso e levado a julgamento. Em seu discurso de 
                  defesa, percorreu toda a história de Israel, mostrando como as Escrituras apontavam para 
                  Jesus como cumprimento das profecias. Seus acusadores, enfurecidos, o levaram para fora 
                  da cidade e o apedrejaram.
                </p>
                <p className="mb-3">
                  No momento final, Estêvão pronunciou duas frases que ecoariam na eternidade: 
                  <em>"Senhor Jesus, recebe o meu espírito"</em> e <em>"Senhor, não lhes leves em conta este pecado."</em> 
                  Palavras de perdão no instante da morte.
                </p>
                <p>
                  Saulo estava presente. Guardava os mantos dos executores. Ele não agia por crueldade, 
                  mas por convicção sincera de estar cumprindo a vontade de Deus. No entanto, aquelas palavras 
                  de Estêvão — aquele perdão, aquela paz diante da morte — plantaram uma semente que germinaria 
                  no caminho de Damasco. Santo Agostinho dirá mais tarde que foi a oração de Estêvão que 
                  conquistou o apóstolo Paulo.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-amber-700 mb-3">"Saulo, Saulo, por que me persegues?"</h4>
                <p className="mb-3">
                  A caminho de Damasco, respirando ainda ameaças de morte contra os discípulos, Saulo foi 
                  alcançado por uma luz mais forte que o sol do meio-dia. Caiu por terra e ouviu uma voz: 
                  <em>"Saulo, Saulo, por que me persegues?"</em> Tremendo, perguntou: <em>"Quem és tu, Senhor?"</em> 
                  A resposta mudou tudo: <em>"Sou Jesus, a quem tu persegues."</em> (At 9,4-5)
                </p>
                <p className="mb-3">
                  Naquele instante, toda a estrutura teológica de Saulo desabou e foi reconstruída. O que 
                  era maldição — a cruz — revelou-se como fonte de vida. O crucificado estava vivo! Estêvão 
                  tinha razão! Saulo reconheceu publicamente seu erro: <em>"Estêvão, estavas certo! Cristo está vivo!"</em>
                </p>
                <p className="mb-3">
                  A transformação não foi apagamento da pessoa, mas reorientação radical. Saulo não deixou 
                  de ser zeloso, rigoroso, disciplinado e inteligente. Todas essas potências foram preservadas, 
                  mas agora tinham nova direção: o que antes era usado para perseguir seria usado para evangelizar.
                </p>
                <p>
                  Em suas cartas, Paulo dirá: <em>"O que para mim era lucro, considerei como perda por causa de 
                  Cristo... e tudo considero como esterco, para ganhar a Cristo."</em> (Fl 3,7-8). A conversão 
                  foi total, mas a pessoa permaneceu — apenas voltada para nova luz.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-amber-700 mb-3">"Levanta-te e entra na cidade"</h4>
                <p className="mb-3">
                  A ordem foi direta: <em>"Levanta-te e entra na cidade."</em> Sinal de confiança, mas também 
                  teste de obediência. Saulo, agora cego, precisou ser guiado pelas mãos — humilhação necessária 
                  para quem se julgava guia espiritual de Israel.
                </p>
                <p className="mb-3">
                  Enquanto isso, Deus enviou uma visão a Ananias, um discípulo em Damasco. Ananias hesitou: 
                  <em>"Senhor, ouvi muitos relatos sobre esse homem e os males que causou aos teus santos em 
                  Jerusalém..."</em> A resposta divina foi clara: <em>"Vai, porque este homem é para mim um 
                  instrumento escolhido para levar o meu nome diante dos gentios, dos reis e dos filhos de Israel."</em> 
                  (At 9,10-15)
                </p>
                <p className="mb-3">
                  A reorientação estava completa: mesmo ardor, novo fim. Paulo dirá mais tarde: 
                  <em>"Ai de mim, se não evangelizar!"</em> (1Cor 9,16). O perseguidor tornara-se apóstolo.
                </p>
                <p>
                  O evento de Damasco não foi experiência passageira. Paulo recordará esse momento diversas 
                  vezes em suas cartas, sempre como referência fundacional de sua vida e missão. Ali nasceu 
                  o apóstolo das nações; ali foi plantada a semente do querigma que incendiaria o mundo antigo.
                </p>
              </div>

            </div>
          </section>

          {/* Capítulo 2 */}
          <section className="border-t-4 border-amber-300 pt-8">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-8 h-8 text-amber-700" />
              <h2 className="text-3xl font-bold text-amber-900">Capítulo 2</h2>
            </div>
            <h3 className="text-2xl font-semibold text-amber-800 mb-6">"Ai de mim, se não evangelizar" — O Querigma</h3>
            
            <div className="space-y-8 text-gray-700 leading-relaxed">
              
              <div>
                <p className="mb-3">
                  <em>"Ai de mim, se não evangelizar!"</em> Este grito do coração de Paulo resume toda sua vida 
                  após Damasco. O querigma — do grego <em>keríssō</em>, anunciar ou pregar — torna-se o eixo 
                  de sua existência missionária.
                </p>
                <p className="mb-3">
                  Embora não dispusesse das mídias de hoje, Paulo tornou-se mensageiro fiel de Jesus Cristo, 
                  guardando com a própria vida o anúncio recebido dos apóstolos e realizando o primeiro anúncio 
                  a judeus e gentios. No Novo Testamento, o verbo e a ideia aparecem repetidas vezes: 
                  "Ide por todo o mundo e pregai o Evangelho" (Mc 16,15); "João pregava batismo de conversão" (Lc 3,3); 
                  "Deus ordenou pregar ao povo" (At 10,42); "Não pregamos a nós mesmos, mas a Cristo Jesus como Senhor" (2Cor 4,5).
                </p>
                <p>
                  O portador da mensagem tem nome específico no grego: <em>kérix</em> — o mensageiro que 
                  transmite, com fidelidade absoluta, a palavra do seu senhor, como o arauto medieval que 
                  proclamava a voz do rei. Paulo desempenha essa função com honra e total entrega: ele não 
                  inventa a mensagem, mas a transmite; não é dono do Evangelho, mas servo dele.
                </p>
              </div>

              <div>
                <p className="mb-3">
                  A missão dos batizados é reforçada pelos sacramentos de iniciação cristã. Batismo, Eucaristia 
                  e Confirmação formam unidade orgânica, e a Confirmação em particular fortalece os fiéis com 
                  o Espírito Santo para difundir e defender a fé (cf. CIC 1285).
                </p>
                <p>
                  A missionariedade, contudo, não se limita à dimensão geográfica — às viagens apostólicas. 
                  Caracteriza-se por um ímpeto missionário interior: urgência de tornar Jesus conhecido e amado, 
                  tanto em palavras quanto em obras. É fogo que queima por dentro e não pode ser contido.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-amber-700 mb-3">"Porque sem mim nada podeis fazer"</h4>
                <p className="mb-3">
                  Paulo, porém, não parte imediatamente para a missão pública após a conversão. Ele precisa 
                  amadurecer internamente a experiência transcendente que viveu. O encontro com Cristo exige 
                  maturação profunda na mente e na alma.
                </p>
                <p className="mb-3">
                  Diferente dos doze apóstolos originais, que não tinham a mesma preparação cultural e rabínica, 
                  Paulo passa por período de formação e retiro espiritual. Vai ao deserto — espaço de silêncio, 
                  solidão e encontro com Deus. Essa espera é parte essencial da formação interior, para que 
                  sua pregação seja sólida, amadurecida, enraizada em experiência genuína.
                </p>
                <p>
                  A lição é clara: formação interior verdadeira implica retirar-se para ouvir o Senhor. 
                  Não podemos ser meros funcionários da Igreja, repetindo mecanicamente fórmulas aprendidas. 
                  Precisamos primeiro encontrar Cristo no silêncio, deixar que Ele nos transforme, para depois 
                  falar dEle com autenticidade.
                </p>
              </div>

              <div>
                <p className="mb-3">
                  O conhecimento de Cristo produz em Paulo um "perfume" que o impregna totalmente. Essa imagem 
                  utilizada pelo autor descreve a transformação íntima permanente: Paulo não apenas conhece 
                  Cristo intelectualmente — ele é permeado por Ele, exala Cristo em tudo o que faz e diz.
                </p>
                <p className="mb-3">
                  A experiência do amor de Cristo interrompeu brutalmente o caminho do perseguidor, mudou-lhe 
                  o rumo, o destino e todas as certezas, forjando um "novo eu". Podemos imaginar Paulo 
                  percorrendo, meditativo, os passos até o local onde Estêvão fora apedrejado, confrontando-se 
                  consigo mesmo: <em>"Cá estou eu, Estêvão! Saí daqui perseguidor, voltei perseguido!"</em>
                </p>
                <p>
                  Mesmo diante da descrença alheia — muitos não acreditavam na conversão do perseguidor —, 
                  o coração de Paulo foi moído pela graça. Sua queda e humilhação não o paralisaram. Ao 
                  contrário, incitaram-no a falar nas sinagogas sobre a experiência vivida e a testemunhar 
                  publicamente sua transformação.
                </p>
              </div>

              <div>
                <p className="mb-3">
                  Todavia, Deus não o envia imediatamente onde Paulo supunha ser mais natural. A permanência 
                  em Jerusalém poderia parecer o caminho lógico para alguém formado ali, mas o Senhor ordena 
                  um desvio missionário: <em>"Vai, porque eu te enviarei para longe, aos gentios"</em> (At 22,21).
                </p>
                <p className="mb-3">
                  O próprio temperamento impetuoso de Paulo o coloca em conflito com a vontade divina. Ele 
                  imagina ficar em Jerusalém — seria ali que deveria agir, convencer os mestres, transformar 
                  a cidade santa. Porém, a ordem é ir às nações, ao mundo pagão, aos incircuncisos.
                </p>
                <p>
                  Diante da incompreensão humana e da demora divina, Paulo ainda precisa aprender: 
                  <em>"Sem mim nada podeis fazer"</em> (Jo 15,5b). A obra não é dele — é de Deus. Suas humilhações 
                  e sofrimentos não são desperdício; são amadurecimento necessário da alma para a grande obra 
                  que Deus preparou.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-amber-700 mb-3">"É bom esperar em silêncio"</h4>
                <p className="mb-3">
                  Um temperamento ansioso sofre profundamente com as demoras de Deus. Paulo, que renunciou 
                  ao rabinismo e a todos os seus antigos sonhos de glória farisaica, precisa ser esmagado 
                  como uva no lagar — imagem bíblica da purificação.
                </p>
                <p className="mb-3">
                  O egoísmo e as fortalezas pessoais devem ser triturados para que o vinho do Espírito possa 
                  fluir livremente. Deus convida Paulo a tarefa maior: avançar para águas mais profundas, 
                  deixar a zona de conforto do conhecido e lançar-se no desconhecido das nações gentias.
                </p>
                <p className="mb-3">
                  Esses anos de silêncio não são perda de tempo. São preparação divina. Em sua oficina, 
                  sustentando-se com o ofício de fazer tendas, Paulo recebe de Barnabé o convite para ir a 
                  Antioquia. Segundo estudiosos, permanece cerca de treze anos sem pregar publicamente — 
                  período longo em que se forma internamente, amadurece sua compreensão do Evangelho e consolida 
                  sua identidade apostólica.
                </p>
                <p>
                  O silêncio não é inatividade. É gestação. Deus forma no escondido o que será manifestado 
                  publicamente depois. A pressa humana contrasta com a pedagogia divina, que prepara instrumentos 
                  com paciência infinita.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-amber-700 mb-3">A missão querigmática</h4>
                <p className="mb-3">
                  A formação de Paulo culmina também na percepção central de que o amor é o critério essencial 
                  de tudo. Sem amor, qualquer discurso eloquente — por mais teológico e correto que seja — é vazio, 
                  oco, estéril. Paulo dirá isso explicitamente em 1Coríntios 13, o hino ao amor que estudaremos 
                  no próximo capítulo.
                </p>
                <p className="mb-3">
                  Os ensinamentos sobre pecado e graça fundamentam a mensagem que Paulo proclamará: 
                  <em>"Todos pecaram e estão privados da glória de Deus, mas são justificados gratuitamente 
                  por sua graça, em virtude da redenção realizada em Cristo Jesus"</em> (Rm 3,23-24). 
                  <em>"O salário do pecado é a morte, mas o dom gratuito de Deus é a vida eterna em Cristo Jesus, 
                  nosso Senhor"</em> (Rm 6,23).
                </p>
                <p>
                  Assim, a espera, as humilhações e a interioridade forçada tornam-se chão fértil para o 
                  ardor missionário que fará de Paulo o apóstolo das nações por excelência. Ele não parte 
                  como aventureiro impulsivo, mas como instrumento amadurecido, purificado e preparado 
                  pelo próprio Deus para anunciar o querigma aos confins da terra.
                </p>
              </div>

            </div>
          </section>

          {/* Capítulo 3 */}
          <section className="border-t-4 border-amber-300 pt-8">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-8 h-8 text-red-600" />
              <h2 className="text-3xl font-bold text-amber-900">Capítulo 3</h2>
            </div>
            <h3 className="text-2xl font-semibold text-amber-800 mb-6">O Amor de Deus — "Se não tivesse amor, eu nada seria"</h3>
            
            <div className="space-y-8 text-gray-700 leading-relaxed">
              
              <div>
                <h4 className="text-lg font-semibold text-amber-700 mb-3">A essência do amor de Deus</h4>
                <p className="mb-3">
                  Salta aos olhos, nas cartas de Paulo, o amor de Deus como a maior graça do cristianismo. 
                  Esse amor tem personificação concreta: <strong>a cruz de Cristo</strong>. Não se trata de 
                  sentimentalismo religioso ou de devocionismo vago, mas de realidade histórica e teológica 
                  que transforma radicalmente a existência humana.
                </p>
                <p className="mb-3">
                  Paulo descobriu que o mais importante não é um entendimento pleno da doutrina e dos dogmas, 
                  por mais necessários que sejam. O essencial é <strong>o encontro com uma Pessoa</strong> que 
                  nos amou até o extremo da cruz. Depois desse maravilhamento de amor — amor que não tem medida 
                  nem limites —, os passos se tornam mais firmes e a estrada passa a ter sentido amplo, de 
                  quem sabe aonde quer chegar.
                </p>
                <p className="mb-3">
                  Esse amor recebe nome específico no grego: <em>ágape</em>. Não é <em>eros</em>, amor que 
                  deseja possuir e espera reciprocidade. Não é <em>philía</em>, amor de amizade baseado em 
                  afinidade. Ágape é amor que se doa totalmente, sem exigir resposta, sem fazer condições.
                </p>
                <p className="mb-3">
                  O Papa Bento XVI explica: Deus nos ama assim, com ágape puro. Diferente do eros humano, 
                  que quer ser correspondido e necessita de reciprocidade, o amor de Deus não faz exigência 
                  alguma. Deus quer irresistivelmente ir ao nosso encontro, nos convida a uma vida divina, 
                  quer comunicar-nos seu amor. Deus se dá totalmente, vem ao nosso encontro para expressar 
                  toda sua natureza, que é a plenitude do amor perfeito e pleno.
                </p>
                <p>
                  Paulo foi profundamente impactado por essa realidade amorosa de Deus. Toda sua teologia 
                  brota dessa experiência fundante: foi amado primeiro, gratuitamente, sem merecimento algum. 
                  E esse amor o transformou.
                </p>
              </div>

              <div>
                <p className="mb-3">
                  Na teologia paulina, as outras virtudes da lista vêm como recompensa ao amor, tal como a 
                  santidade. Ser santo é amar, porque reconheceu-se amado por Deus. A desobediência a Deus 
                  é, em última análise, negligência desse amor.
                </p>
                <p className="mb-3">
                  Ninguém quer negligenciar um amor incondicional. Negligenciamos o amor eros, muitas vezes, 
                  porque ele é exigente, necessita de reciprocidade, e nem sempre estamos disponíveis ou 
                  dispostos a corresponder. Escolhemos o que e quem amar segundo critérios próprios.
                </p>
                <p className="mb-3">
                  Porém, Deus não é assim. Ele ama sem limites e sem condições. Amar os irmãos é o reverberar 
                  do amor de Deus que se faz operoso em nós. É o "sim" concreto ao projeto divino da civilização 
                  do amor, expressão cunhada por Paulo VI e desenvolvida por João Paulo II.
                </p>
                <p>
                  Ninguém é o amor em si mesmo. Nós exercemos a capacidade de amar, mas essa capacidade não 
                  é nossa — é de Deus. Portanto, só amamos alguém porque temos essa capacidade dada por Deus, 
                  isto é, Deus é a fonte de todas as virtudes humanas, especialmente do amor.
                </p>
              </div>

              <div>
                <p className="mb-3">
                  Quando amamos, refletimos Deus. A imagem é bela: assim como a lua não tem brilho próprio, 
                  e sua luminosidade vem do sol, assim é o homem quando ama. Não brilhamos com luz própria; 
                  somos espelhos que refletem a Luz divina. Nossa capacidade de amar é participação no próprio 
                  amor que Deus é.
                </p>
                <p className="mb-3">
                  Para Paulo, fé e amor substituirão lei e justiça — conceitos que ele tinha à luz de sua fé 
                  antiga. Paulo foi criado na mais rígida observância da Lei e nos seus pormenores. Era fariseu, 
                  e a Lei era um fardo pesado para ele, pois tudo devia ser cumprido ao pé da letra, sem 
                  margem para o coração.
                </p>
                <p>
                  Como não se emocionar com esse novo entendimento que se descortina na vida de Paulo? Como 
                  ficar indiferente e não fazer a analogia com o amor de Deus, esse amor que nos envolve 
                  completamente e nos lava do pecado através do sangue do Cordeiro? Um Deus que nos "compra" 
                  por alto preço — Paulo sentiu isso visceralmente ao perceber que Jesus pagou o pecado da 
                  humanidade com sangue divino.
                </p>
              </div>

              <div>
                <p className="mb-3">
                  Os ossos de Paulo eram ressequidos — ressequidos por dor e sofrimento dos cristãos que ele 
                  levou à coroa do martírio. A memória de Estêvão e de tantos outros pesava sobre sua consciência 
                  como chumbo. Porém, o Espírito Santo, como bálsamo divino, faz com que toda secura e toda 
                  aridez se tornem vida.
                </p>
                <p className="mb-3">
                  Não apenas vida de animação superficial ou entusiasmo passageiro, mas vida plena, vida que 
                  age e que exerce esse amor concretamente. Da aridez interior brota um jardim que dá frutos 
                  e oferece sombra para quem quiser achegar-se, proporcionando conforto e alento. Assim é 
                  uma vida plena no amor de Deus.
                </p>
                <p className="mb-3">
                  Paulo, assim transformado, vai ao encontro dos irmãos. Quer, irresistivelmente, comunicar 
                  essa dádiva recebida. E esta é a essência da vida cristã para ele: uma alegre resposta a 
                  esse amor que nos amou primeiro.
                </p>
                <p>
                  <em>"Amarás o teu próximo como a ti mesmo"</em> (Mt 22,39). Fazer ressoar o mandamento de 
                  Jesus é uma forma de dizer "obrigado" a Deus, por nos amar com tamanha devoção. O amor ao 
                  próximo não é peso ou obrigação — é gratidão transbordante.
                </p>
              </div>

              <div>
                <p className="mb-3">
                  No coração de Paulo, havia uma brasa incandescente que ardia, acesa pelo próprio Filho de Deus. 
                  Dessa brasa nascia um ímpeto irresistível: dar a conhecer esse amor e incendiar o mundo inteiro.
                </p>
                <p className="mb-3">
                  Nem o mais sábio dos filósofos gregos, nem os poetas mais geniais teriam capacidade de 
                  escrever tal poema sobre o amor se não tivessem, diante de seus olhos, o modelo vivo: 
                  a figura amorosa de Jesus Cristo.
                </p>
                <p>
                  Paulo tinha tanta intimidade com o Senhor que o traduziu como em nenhum outro texto da 
                  história humana. Fez como que um perfil perfeito do amor de Deus. E esse perfil está 
                  imortalizado em 1Coríntios 13, o hino ao amor que percorreremos agora.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
                <h4 className="text-lg font-semibold text-amber-700 mb-4">O valor do amor (1Cor 13,1-3)</h4>
                <p className="italic mb-4 text-gray-800">
                  "Se eu falar as línguas dos homens e dos anjos, mas não tiver amor, sou como o bronze que 
                  soa ou címbalo que retine. E se eu possuir o dom da profecia, conhecer todos os mistérios 
                  e toda a ciência e tiver tanta fé que chegue a transportar montanhas, mas não tiver amor, 
                  nada sou. E se eu repartir todos os meus bens entre os pobres e entregar meu corpo ao fogo, 
                  mas não tiver amor, nada disso me aproveita."
                </p>
                
                <div className="space-y-4 text-gray-700">
                  <p>
                    O poema de Paulo sobre o amor divide-se em três partes: o valor do amor (v. 1-3), 
                    as qualidades do amor (v. 4-7) e a duração do amor (v. 8-13). A primeira parte apresenta 
                    o valor superior do amor: nenhum carisma ou dom tem valor se não for alicerçado nos 
                    "dons mais altos" (1Cor 12,31).
                  </p>
                  <p>
                    Paulo não está cantando o amor humano, não o amor conjugal, nem o amor entre amigos. 
                    O apóstolo dos gentios, com o coração em brasa, canta o amor mais nobre, utilizando a 
                    palavra <em>ágape</em>, que é a plenitude do amor: o amor pleno, o amor total, o amor 
                    eterno que é o Espírito Santo de Deus e de Cristo, dado de graça, sem nenhuma condição 
                    ao cristão.
                  </p>
                  <p>
                    Paulo menciona até a língua dos anjos — linguagem que é falada no céu. Ainda que soubesse 
                    todas as línguas celestes e terrestres, se não tivesse o amor ágape, seria um instrumento 
                    que toca sem harmonia a regê-lo: apenas barulho, ruído, um nada. A primeira estrofe do 
                    poema literalmente dá o tom: sem Deus, nenhuma linguagem e nenhuma música é agradável.
                  </p>
                  <p>
                    Os planos de Deus revelados aos homens — os mistérios divinos — demonstram uma generosidade 
                    de Deus, que não precisa de ninguém, mas quis precisar do homem e se revelar a ele. 
                    O homem deve, em seu íntimo, responder a essa generosidade, amando.
                  </p>
                  <p>
                    O amor é uma resposta generosa a quem nos amou primeiro. Amar o próximo é responder ao 
                    amor de Deus concretamente. Nosso amor de reciprocidade a Deus não modifica a essência 
                    de Deus — você amar a Deus com todas as forças do seu coração não alterará quem Deus é. 
                    Porém, seu amor a Deus dado a um irmão transforma sua alma e a dele. Essa é a novidade 
                    revolucionária do cristianismo, testemunhada e admirada por Tertuliano: 
                    <em>"Vede como eles se amam!"</em>
                  </p>
                  <p>
                    O conhecimento, se não estiver a serviço do outro, é infértil. Fertilidade no viver é 
                    viver a serviço e transformar a vida em uma sementeira de amor. São Josemaria Escrivá 
                    exorta: <em>"Que a tua vida não seja uma vida estéril. Sê útil. Deixa rasto. Ilumina 
                    com o resplendor da tua fé e do teu amor."</em>
                  </p>
                  <p>
                    O Mestre Eckhart ensina: <em>"Pelo conhecer, recebo Deus para dentro de mim; pelo amor, 
                    ao contrário, eu entro em Deus."</em> Percebemos, ouvindo Eckhart, que não se trata de 
                    desprezo ao conhecimento, mas de submetê-lo totalmente a Deus e aos irmãos.
                  </p>
                  <p>
                    A fé também é contemplada na primeira parte do poema. Uma fé taumatúrgica — que faz 
                    milagres, que move montanhas — não pode ser fé farisaica, isto é, exercida para a 
                    própria vanglória ou para reconhecimento exterior. A fé genuína é pautada pelo amor e 
                    pelo serviço. Buscar reconhecimento não é fé; é orgulho. A fé só é verdadeira quando 
                    é movida pelo Espírito Santo.
                  </p>
                  <p>
                    Santo Inácio de Antioquia, mártir do século II, a caminho da morte proclamou: 
                    <em>"Ouvistes? Condenam-nos pelo nosso apego à fé. Que felicidade morrer por Jesus Cristo!"</em> 
                    E Paulo reafirma: <em>"O amor sempre vencerá, o amor tudo pode."</em>
                  </p>
                  <p>
                    <em>"E se eu repartir todos os meus bens entre os pobres e entregar meu corpo ao fogo, 
                    mas não tiver amor, nada disso me aproveita."</em> Até mesmo as obras de caridade e o 
                    martírio podem ser vazios se não brotarem do amor. O cristão não é convidado a fazer 
                    obras pelas obras, mas a amar através das obras.
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600 mt-6">
                <h4 className="text-lg font-semibold text-amber-700 mb-4">Os atributos do amor (1Cor 13,4-7)</h4>
                <p className="italic mb-4 text-gray-800">
                  "O amor é paciente, o amor é benigno, não é invejoso; o amor não é orgulhoso, não se 
                  envaidece, não é descortês, não é interesseiro, não se irrita, não guarda rancor; não se 
                  alegra com a injustiça, mas regozija-se com a verdade; tudo desculpa, tudo crê, tudo 
                  espera, tudo suporta."
                </p>
                
                <div className="space-y-4 text-gray-700">
                  <p>
                    A benignidade é o desdobramento da paciência. É a reação com bondade diante de alguém 
                    que nos ofende e que nos tira algo. Essas virtudes não são passivas; vão ao encontro do 
                    outro, querem abraçar, querem acolher.
                  </p>
                  <p>
                    Esse é o atributo divino por excelência: amar o que não é importante, o que não é grande, 
                    o que não é útil; amar quem não merece ser amado; ter paciência com quem nos enerva. 
                    Esse amor nos surpreende e nos constrange: <em>"O amor de Cristo nos constrange"</em> (2Cor 5,14).
                  </p>
                  <p>
                    Como é difícil, em nossas comunidades e movimentos eclesiais, lidar com o sentimento de 
                    vaidade que nos acomete pelo simples fato de estarmos à frente, em alguma posição de 
                    liderança. Algo que apodrece a comunidade e afasta as pessoas da Igreja. O amor verdadeiro 
                    destrói a vaidade.
                  </p>
                  <p>
                    Temos um modelo de amor incondicional por excelência: Cristo na cruz, que vem cumprir 
                    as Sagradas Escrituras e as profecias. Paulo, quando compôs os versículos sobre o que 
                    é o amor, sem dúvida tomou também a história do profeta Oseias — que se casou com uma 
                    prostituta, foi humilhado por toda a sua vida e, mesmo assim, não deixou de amá-la nem 
                    por um só momento — como grande modelo de amor no Antigo Testamento.
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600 mt-6">
                <h4 className="text-lg font-semibold text-amber-700 mb-4">A duração do amor (1Cor 13,8-13)</h4>
                <p className="italic mb-4 text-gray-800">
                  "O amor jamais acaba; mas quando chegar a perfeição, desaparecerá o que era parcial... 
                  Agora, portanto, permanecem a fé, a esperança e o amor. Porém, o maior deles é o amor."
                </p>
                
                <div className="space-y-4 text-gray-700">
                  <p>
                    A comunidade de Corinto era tensa e presunçosa. Considerava-se uma comunidade diferente 
                    das demais, com dons espirituais elevadíssimos. Estavam envaidecidos, orgulhosos e 
                    assoberbados, pois pensavam que os dons lhes pertenciam, como se fossem os "donos do 
                    Espírito Santo".
                  </p>
                  <p>
                    Paulo responde com clareza: o amor não acaba, mas as línguas cessarão, as profecias 
                    acabarão, tudo ficará relativizado ao se comparar com a perfeição, que é o amor. Tudo 
                    é provisório, passageiro e temporário. Só Deus é eterno, como é eterno seu amor para conosco.
                  </p>
                  <p>
                    O amor é a mola de todos os dons, é a forma, o centro, a alma de tudo. Um dom sem amor 
                    é uma lata vazia que cai escada abaixo — só faz barulho, nada mais.
                  </p>
                  <p>
                    Paulo então apresenta as três virtudes teologais: fé, esperança e amor. As virtudes 
                    teologais brotam de Deus, não nascemos com elas. Recebemo-las no batismo como sementes 
                    que devem ser cultivadas ao longo da vida.
                  </p>
                  <p>
                    <strong>A fé:</strong> <em>"A fé é o fundamento do que se espera e a prova das realidades 
                    que não se veem"</em> (Hb 11,1). Ela também acabará no céu, pois acreditamos sem ver, 
                    mas no céu veremos face a face. Não existirá mais necessidade de fé — existirá a visão 
                    plena de Deus. A fé não é um sentimento; pode nascer como sentimento, mas transforma-se 
                    aos poucos em saber profundo: "Eu sei que Deus me ama e me ampara." Não se pode viver 
                    de sentimento o tempo todo; a fé madura é convicção.
                  </p>
                  <p>
                    <strong>A esperança:</strong> <em>"A esperança é para nós uma âncora da alma, firme, 
                    sólida, que penetra até além do véu, no santuário onde Jesus entrou por nós como precursor, 
                    Sumo Sacerdote eterno segundo a ordem de Melquisedec"</em> (Hb 6,19-20). O ato de esperar 
                    em Deus cessará no céu, pois o que esperamos será cumprido totalmente. Não é esperança 
                    humana, baseada em probabilidades; a promessa do céu foi selada com o sangue de Jesus, 
                    não com sangue de bodes e cabras.
                  </p>
                  <p>
                    <strong>O amor:</strong> A maior das virtudes é o amor, pois ele jamais passará. Por quê? 
                    Porque é a essência de Deus. <em>"Nós conhecemos o amor que Deus tem por nós e nele 
                    acreditamos. Deus é amor, e quem permanece no amor permanece em Deus, e Deus nele"</em> (1Jo 4,16).
                  </p>
                  <p>
                    No céu não haverá mais fé, porque veremos. Não haverá mais esperança, porque tudo estará 
                    cumprido. Mas o amor permanecerá eternamente, porque Deus não apenas tem amor — Deus É amor. 
                    E nós participaremos dessa comunhão de amor trinitário para sempre.
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* Conclusão */}
          <section className="border-t-4 border-amber-300 pt-8">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-8 h-8 text-red-600" />
              <h2 className="text-3xl font-bold text-amber-900">Conclusão</h2>
            </div>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Percorremos juntos uma jornada extraordinária pela formação, conversão e mensagem de Paulo. 
                Três capítulos que nos revelam não apenas a biografia de um apóstolo, mas o coração pulsante 
                do Evangelho.
              </p>
              
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border-l-4 border-amber-600">
                <h3 className="text-xl font-semibold text-amber-800 mb-4">Síntese dos três momentos:</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-amber-700 mb-2">1. Formação (Capítulo 1)</h4>
                    <p className="text-gray-700">
                      De Tarso a Jerusalém, de artesão a rabino, dos pés de Gamaliel ao apedrejamento de 
                      Estêvão — vimos como Deus preparou, através da cultura, da Lei e até do confronto, 
                      um instrumento único para alcançar as nações. A conversão no caminho de Damasco não 
                      apagou Paulo; reorientou-o. Mesmas capacidades, novo objetivo.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-amber-700 mb-2">2. Silêncio e Maturação (Capítulo 2)</h4>
                    <p className="text-gray-700">
                      Treze anos de espera não foram perda de tempo, mas preparação divina. No deserto, 
                      na oficina de tendas, no silêncio que precede a missão, Paulo amadureceu interiormente 
                      a experiência vivida. Aprendeu que sem Cristo nada podemos fazer, que o amor é critério 
                      essencial de tudo, e que a obra é de Deus, não nossa.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-amber-700 mb-2">3. O Amor Ágape (Capítulo 3)</h4>
                    <p className="text-gray-700">
                      O coração do querigma paulino. Deus É amor, e esse amor — ágape, incondicional, gratuito, 
                      sem exigências — transforma radicalmente quem o experimenta. Paulo cantou esse amor em 
                      1Coríntios 13: sem amor, nada somos; com amor, tudo é possível. Fé e esperança passarão; 
                      o amor permanecerá eternamente.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-100 p-6 rounded-lg mt-6">
                <h3 className="text-xl font-semibold text-amber-800 mb-4">A mensagem para nós hoje:</h3>
                <p className="mb-3">
                  Paulo nos ensina que a vida cristã não é primariamente sobre cumprir regras ou dominar 
                  doutrinas. É sobre <strong>encontrar uma Pessoa</strong> que nos amou até o extremo, 
                  deixar-se transformar por esse amor, e responder com a própria vida.
                </p>
                <p className="mb-3">
                  Como Paulo, somos chamados a deixar que o amor de Cristo nos constranja, nos impulsione, 
                  nos lance às águas profundas da missão. Não por obrigação, mas por gratidão transbordante. 
                  Não por medo do castigo, mas por maravilhamento diante de tanto amor.
                </p>
                <p>
                  O grito de Paulo ressoa através dos séculos e chega até nós: <em>"Ai de mim, se não 
                  evangelizar!"</em> Que esse ímpeto missionário, nascido do encontro com Cristo e alimentado 
                  pelo Espírito Santo, incendeie também nossos corações.
                </p>
              </div>

              <div className="text-center mt-8 pt-6 border-t border-amber-300">
                <p className="text-lg italic text-gray-700 mb-4">
                  "Nós conhecemos o amor que Deus tem por nós e nele acreditamos.<br />
                  Deus é amor, e quem permanece no amor permanece em Deus, e Deus nele."
                </p>
                <p className="text-sm text-gray-600">— 1João 4,16</p>
              </div>

              <div className="bg-gradient-to-br from-amber-900 to-orange-800 text-white p-8 rounded-lg mt-8 text-center">
                <p className="text-xl font-semibold mb-4">
                  "Ama e faz o que quiseres."
                </p>
                <p className="text-sm opacity-90">— Santo Agostinho</p>
              </div>

            </div>
          </section>

          {/* Perguntas para reflexão */}
          <section className="border-t-4 border-amber-300 pt-8">
            <h2 className="text-2xl font-bold text-amber-900 mb-6">Para reflexão pessoal e em grupo</h2>
            
            <div className="space-y-4 text-gray-700">
              <div className="bg-amber-50 p-4 rounded-lg">
                <p className="font-semibold text-amber-800 mb-2">1. Sobre a formação de Paulo:</p>
                <p>Como Deus pode usar nossa história pessoal — incluindo aquilo que parece negativo ou 
                perdido — para nos preparar para sua missão?</p>
              </div>

              <div className="bg-amber-50 p-4 rounded-lg">
                <p className="font-semibold text-amber-800 mb-2">2. Sobre o silêncio e a espera:</p>
                <p>Você consegue identificar períodos de "deserto" em sua vida que foram, na verdade, 
                tempos de preparação divina?</p>
              </div>

              <div className="bg-amber-50 p-4 rounded-lg">
                <p className="font-semibold text-amber-800 mb-2">3. Sobre o amor ágape:</p>
                <p>Como seria sua vida se você realmente acreditasse que Deus te ama de forma incondicional, 
                sem exigências? Como isso transformaria seu modo de amar os outros?</p>
              </div>

              <div className="bg-amber-50 p-4 rounded-lg">
                <p className="font-semibold text-amber-800 mb-2">4. Sobre a missão:</p>
                <p>O que significa para você, hoje, concretamente, o grito de Paulo: "Ai de mim, se não 
                evangelizar"?</p>
              </div>

              <div className="bg-amber-50 p-4 rounded-lg">
                <p className="font-semibold text-amber-800 mb-2">5. Sobre 1Coríntios 13:</p>
                <p>Releia o hino ao amor substituindo "o amor" por "eu": "Eu sou paciente, eu sou benigno..." 
                Onde você percebe maior distância entre o ideal e sua realidade? O que o Espírito Santo 
                está te convidando a mudar?</p>
              </div>
            </div>
          </section>

          {/* Referências */}
          <section className="border-t-4 border-amber-300 pt-8">
            <h2 className="text-2xl font-bold text-amber-900 mb-6">Referências bíblicas principais</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div className="bg-gray-50 p-4 rounded">
                <h3 className="font-semibold text-amber-800 mb-2">Conversão de Paulo:</h3>
                <ul className="space-y-1">
                  <li>• Atos 9,1-19</li>
                  <li>• Atos 22,1-21</li>
                  <li>• Atos 26,9-18</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <h3 className="font-semibold text-amber-800 mb-2">Formação e identidade:</h3>
                <ul className="space-y-1">
                  <li>• Filipenses 3,4-11</li>
                  <li>• Atos 22,3</li>
                  <li>• 2Coríntios 11,22-29</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <h3 className="font-semibold text-amber-800 mb-2">Missão e querigma:</h3>
                <ul className="space-y-1">
                  <li>• 1Coríntios 9,16-23</li>
                  <li>• Romanos 1,14-17</li>
                  <li>• 2Coríntios 4,1-6</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <h3 className="font-semibold text-amber-800 mb-2">O amor de Deus:</h3>
                <ul className="space-y-1">
                  <li>• 1Coríntios 13,1-13</li>
                  <li>• Romanos 5,5-8</li>
                  <li>• Romanos 8,31-39</li>
                  <li>• 1João 4,7-21</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <h3 className="font-semibold text-amber-800 mb-2">Pecado e graça:</h3>
                <ul className="space-y-1">
                  <li>• Romanos 3,21-26</li>
                  <li>• Romanos 5,12-21</li>
                  <li>• Romanos 6,23</li>
                  <li>• Efésios 2,1-10</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <h3 className="font-semibold text-amber-800 mb-2">Martírio de Estêvão:</h3>
                <ul className="space-y-1">
                  <li>• Atos 6,8—7,60</li>
                  <li>• Atos 8,1-3</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Espaço para anotações */}
          <section className="border-t-4 border-amber-300 pt-8">
            <h2 className="text-2xl font-bold text-amber-900 mb-6">Espaço para suas anotações</h2>
            
            <div className="space-y-6">
              <div className="border-2 border-amber-200 rounded-lg p-6 min-h-[200px] bg-amber-50/30">
                <p className="text-sm text-gray-500 italic mb-4">
                  Use este espaço para registrar insights, perguntas e aplicações pessoais durante a formação:
                </p>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                  <div key={i} className="border-b border-gray-300 h-8 mb-1"></div>
                ))}
              </div>

              <div className="border-2 border-amber-200 rounded-lg p-6 min-h-[150px] bg-amber-50/30">
                <p className="text-sm text-gray-500 italic mb-4">
                  Compromisso pessoal — como vou responder ao amor de Deus esta semana?
                </p>
                {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                  <div key={i} className="border-b border-gray-300 h-8 mb-1"></div>
                ))}
              </div>
            </div>
          </section>

        </div>

        {/* Rodapé */}
        <div className="bg-gradient-to-br from-amber-900 to-orange-800 text-white p-8 rounded-b-lg text-center">
          <Cross className="w-12 h-12 mx-auto mb-4 opacity-75" />
          <p className="text-sm opacity-90 mb-2">
            Material elaborado para o Clube Santo Agostinho
          </p>
          <p className="text-sm opacity-75">
            Baseado no livro "O Querigma nas Cartas de Paulo" de Tamancoldi
          </p>
          <div className="mt-6 pt-6 border-t border-white/30">
            <p className="text-xs italic">
              "Que o amor de Cristo nos constranja a anunciar o Evangelho com alegria!"
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}