
import Image from 'next/image'
import { PageShell } from '@/components/PageShell'
import { Reveal } from '@/components/Reveal'

export default function MinustPage({
  params,
}: {
  params: { locale: 'et' | 'en' }
}) {
  const isEt = params.locale === 'et'

  return (
    <PageShell locale={params.locale}>
      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-organic border border-[#e6c7cd] bg-white/80 p-3 shadow-soft">
              <Image
                src="/images/minust-hooldus.png"
                alt="Ketrud Tühane - hooldus, massaaž ja inimese toetamine"
                width={900}
                height={1100}
                className="h-full w-full rounded-organic object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div>
              <p className="mb-4 text-xs uppercase tracking-widest text-roseGoldDeep">
                {isEt ? 'Minust' : 'About me'}
              </p>

              <h1 className="rose-heading mb-8 text-4xl leading-tight md:text-5xl">
                {isEt ? 'Minu teekond inimesteni' : 'My journey with people'}
              </h1>

              {isEt ? (
                <div className="space-y-5 text-lg leading-relaxed text-ink">
                  <p>
                    Olen tegelenud terve oma teadliku elu inimestega. Üle kahekümne aasta
                    olen töötanud massaažiterapeudina ning selle teekonna jooksul puutunud
                    kokku väga erinevate inimeste, lugude ja vajadustega.
                  </p>

                  <p>
                    Aastate jooksul on mind kõnetanud erinevad praktikad ja lähenemised,
                    mis toetavad inimese terviklikku heaolu – keha, meele ja sisemise
                    tasakaalu hoidmist.
                  </p>

                  <p>
                    Täna on see teekond toonud mind õppima Tallinna Tervishoiu Kõrgkooli
                    hooldustöötaja kutseõppesse. Soovin ühendada oma varasema kogemuse,
                    teadmised ja hooliva kohalolu praktiliste oskustega, et pakkuda
                    inimestele tuge, väärikust ja soojust elu erinevates etappides.
                  </p>

                  <p className="border-l-4 border-[#c99ca3] pl-5 italic text-roseGoldDeep">
                    Hoolimine ei ole minu jaoks lihtsalt töö — see on kutsumus.
                  </p>
                </div>
              ) : (
                <div className="space-y-5 text-lg leading-relaxed text-ink">
                  <p>
                    I have worked with people throughout my conscious life. For more than
                    twenty years, I have worked as a massage therapist and met many different
                    people, stories and needs along the way.
                  </p>

                  <p>
                    Over the years, I have been drawn to different practices and approaches
                    that support a person’s holistic wellbeing — body, mind and inner balance.
                  </p>

                  <p>
                    Today, this path has led me to study care work at Tallinn Health Care
                    College. I wish to combine my previous experience, knowledge and caring
                    presence with practical skills, so I can offer support, dignity and warmth
                    through different stages of life.
                  </p>

                  <p className="border-l-4 border-[#c99ca3] pl-5 italic text-roseGoldDeep">
                    Caring is not just my work — it is my calling.
                  </p>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  )
}
