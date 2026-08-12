import ScrollHero from "../components/ScrollHero/ScrollHero";
import Navbar from "../components/Navbar/Navbar";
import ScrollReveal from "../components/ScrollReveal/ScrollReveal";
import TextReveal from "../components/TextReveal/TextReveal";
import Magnetic from "../components/Magnetic/Magnetic";
import ParallaxImage from "../components/ParallaxImage/ParallaxImage";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <Navbar />
      <ScrollHero />
      
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeText}>
          100% A5 WAGYU • LOCALLY SOURCED • HANDCRAFTED DAILY • 100% A5 WAGYU • LOCALLY SOURCED • HANDCRAFTED DAILY • 100% A5 WAGYU • LOCALLY SOURCED • HANDCRAFTED DAILY •
        </div>
      </div>

      <section className={styles.heritage}>
        <ScrollReveal>
          <div className={styles.heritageContent}>
            <span className={styles.heritageSubtitle}>Our Heritage</span>
            <TextReveal>
              <h2 className={styles.heritageTitle}>CRAFTING THE CROWN JEWEL OF BURGERS</h2>
            </TextReveal>
            <p className={styles.heritageText}>
              It started with a simple question: What if fast food wasn't fast, but perfect? 
              Our founders spent three years sourcing the finest A5 Wagyu, forging relationships with 
              artisanal bakers, and foraging truffles to create a menu that transcends the drive-thru.
            </p>
          </div>
        </ScrollReveal>
        <ParallaxImage 
          className={styles.heritageImage} 
          style={{
            backgroundImage: "url('/images/heritage_chef.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }} 
          offset={80} 
        />
      </section>
      
      <section className={`${styles.section} ${styles.signatureMenu}`}>
        <TextReveal>
          <h2 className={styles.sectionTitle}>Signature Menu</h2>
        </TextReveal>
        <div className={styles.menuGrid}>
          <ScrollReveal delay={100}>
            <div className={styles.menuCard}>
              <h3 className={styles.cardTitle}>The Burger Bite Burger</h3>
              <p className={styles.cardDesc}>Double Wagyu patties, truffle aioli, aged cheddar, and our signature gold-dusted brioche bun.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className={styles.menuCard}>
              <h3 className={styles.cardTitle}>Truffle Fries</h3>
              <p className={styles.cardDesc}>Hand-cut potatoes fried to perfection, tossed in white truffle oil and parmesan.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className={styles.menuCard}>
              <h3 className={styles.cardTitle}>Liquid Gold</h3>
              <p className={styles.cardDesc}>A creamy, decadent vanilla bean shake topped with whipped cream and edible gold flakes.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ScrollReveal>
        <section className={styles.promiseSection}>
          <div className={styles.promiseContainer}>
            <div className={styles.promiseHeader}>
              <span className={styles.promiseNumber}>01</span>
              <h2 className={styles.promiseTitle}>THE PROMISE</h2>
            </div>
            <div className={styles.promiseBody}>
              <p className={styles.promiseStatement}>
                We don't do fast food. We do <span className={styles.highlight}>good food, fast.</span> Every ingredient is sourced from local farms, every patty is smashed to perfection, and every bite is designed to be worth a million bucks.
              </p>
            </div>
          </div>
          <div className={styles.promiseWatermark}>PROMISE</div>
        </section>
      </ScrollReveal>
      <section className={`${styles.section} ${styles.artOfBurger}`}>
        <TextReveal>
          <h2 className={styles.sectionTitle}>The Art of the Burger</h2>
        </TextReveal>
        <div className={styles.bentoGrid}>
          <ParallaxImage 
            data-cursor="pointer" 
            className={`${styles.bentoItem} ${styles.bentoLarge}`} 
            style={{
              backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.3)), url('/images/bento_wagyu_1786441614582.png')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
            offset={30}
          >
            <h3 className={styles.bentoTitle}>Wagyu Beef</h3>
            <p className={styles.bentoDesc}>100% pure A5 Wagyu, ground fresh daily and smashed to lock in the flavor. Our signature blend delivers a crust that defies expectations and a center that melts in your mouth.</p>
          </ParallaxImage>

          <ParallaxImage 
            data-cursor="pointer" 
            className={styles.bentoItem} 
            style={{
              backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.3)), url('/images/bento_truffle_1786441624843.png')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
            offset={30}
          >
            <h3 className={styles.bentoTitle}>The Truffle</h3>
            <p className={styles.bentoDesc}>Hand-foraged black truffles infused into our aioli, aged for 30 days to perfection.</p>
          </ParallaxImage>

          <ParallaxImage 
            data-cursor="pointer" 
            className={styles.bentoItem} 
            style={{
              backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.3)), url('/images/bento_bun_1786441636153.png')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
            offset={30}
          >
            <h3 className={styles.bentoTitle}>The Bun</h3>
            <p className={styles.bentoDesc}>Artisan brioche baked in-house every morning, toasted with clarified butter and dusted with edible gold.</p>
          </ParallaxImage>
        </div>
      </section>

      <section className={styles.goldStandardSection}>
        <ScrollReveal>
          <div className={styles.goldContent}>
            <h2 className={styles.goldTitle}>NOT JUST A BURGER.</h2>
            <h2 className={styles.goldTitle}>AN EXPERIENCE.</h2>
            <div className={styles.goldDivider}></div>
            <p className={styles.goldSubtitle}>
              Taste the million dollar difference. Handcrafted daily in limited batches.
            </p>
            <div style={{ marginTop: "3rem" }}>
              <Magnetic>
                <button className={styles.goldButton}>SECURE YOUR BITE</button>
              </Magnetic>
            </div>
          </div>
        </ScrollReveal>
        <div className={styles.goldWatermark}>BURGER BITE</div>
      </section>

      <section className={styles.horizontalMenu}>
        <div className={styles.horizontalMenuHeader}>
          <TextReveal>
            <h2 className={styles.sectionTitle} style={{ marginBottom: 0, textAlign: 'left' }}>Taste the Menu</h2>
          </TextReveal>
        </div>
        <div className={styles.horizontalScrollWrapper}>
          <div data-cursor="pointer" className={styles.menuItemCard} style={{
            backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.2)), url('/images/horizontal_burger.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>
            <span className={styles.menuItemPrice}>$1,000,000</span>
            <h3 className={styles.menuItemTitle}>The Flagship Burger</h3>
          </div>
          <div data-cursor="pointer" className={styles.menuItemCard} style={{
            backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.2)), url('/images/horizontal_fries.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>
            <span className={styles.menuItemPrice}>$50</span>
            <h3 className={styles.menuItemTitle}>Gold-Dusted Fries</h3>
          </div>
          <div data-cursor="pointer" className={styles.menuItemCard} style={{
            backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.2)), url('/images/horizontal_shake.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>
            <span className={styles.menuItemPrice}>$100</span>
            <h3 className={styles.menuItemTitle}>Truffle Shake</h3>
          </div>
          <div data-cursor="pointer" className={styles.menuItemCard} style={{
            backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.2)), url('/images/horizontal_cola_1786441650224.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>
            <span className={styles.menuItemPrice}>$25</span>
            <h3 className={styles.menuItemTitle}>Sparkling Caviar Cola</h3>
          </div>
        </div>
      </section>

      <section className={styles.location}>
        <ScrollReveal>
          <h2 className={styles.locationTitle}>TOKYO FLAGSHIP</h2>
          <p className={styles.locationAddress}>1-2-3 Roppongi Hills, Minato City, Tokyo</p>
        </ScrollReveal>
      </section>

      <section className={styles.clubSection}>
        <ScrollReveal>
          <div className={styles.clubContent}>
            <TextReveal>
              <h2 className={styles.clubTitle}>JOIN THE BURGER BITE CLUB</h2>
            </TextReveal>
            <p className={styles.clubDesc}>Download the app for exclusive access to private dining rooms, off-menu items, and priority reservations at our global flagships.</p>
            <Magnetic>
              <a href="#" className={styles.downloadButton}>Download the App</a>
            </Magnetic>
          </div>
        </ScrollReveal>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerLogo}>BURGER BITE</div>
        <div className={styles.footerLinks}>
          <Magnetic><a href="#">Menu</a></Magnetic>
          <Magnetic><a href="#">Locations</a></Magnetic>
          <Magnetic><a href="#">Careers</a></Magnetic>
          <Magnetic><a href="#">Privacy</a></Magnetic>
        </div>
        <div className={styles.copyright}>© 2026 Burger Bite. All rights reserved.</div>
      </footer>
    </main>
  );
}
