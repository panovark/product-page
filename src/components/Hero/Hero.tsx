import styles from "./Hero.module.scss";

const features = [
  { value: "52 TOPS", label: "AI Processing" },
  { value: "48MP", label: "RGB Camera" },
  { value: "IP67", label: "Water Resistant" },
  { value: "8GB", label: "RAM" },
  { value: "128GB", label: "Storage" },
  { value: "6-core", label: "ARM CPU" },
  { value: "9-axis", label: "IMU" },
];

export function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            OAK <span className={styles.highlight}>4</span> D
          </h1>
          <p className={styles.subtitle}>
            The most advanced stereo vision and edge inference camera. A true
            standalone device combining elegant design, industrial grade
            materials, and industry leading compute.
          </p>

          <div className={styles.features}>
            {features.map((feature) => (
              <div key={feature.value} className={styles.feature}>
                <span className={styles.value}>{feature.value}</span>
                <span className={styles.label}>{feature.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.actions}>
            <a href="#features" className={styles.btnPrimary}>
              Explore Features
            </a>
            <a
              href="https://shop.luxonis.com/products/oak-4-d"
              className={styles.btnSecondary}
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy Now
            </a>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <img
            src="/OAK_D_5.webp"
            alt="OAK 4 D Camera"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
