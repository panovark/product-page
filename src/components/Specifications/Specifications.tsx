import styles from "./Specifications.module.scss";

const specs = [
  { label: "Processor", value: "6-core ARM CPU (Qualcomm 8-series)" },
  { label: "Memory", value: "8GB RAM" },
  { label: "Storage", value: "128GB" },
  {
    label: "AI Processing",
    value: "48 INT8 TOPS + 12 FP16 TOPS (AI), 4 FP16 TOPS (GPU)",
  },
  { label: "RGB Camera", value: "48MP IMX586 sensor" },
  { label: "Stereo Cameras", value: "800P, 75mm baseline" },
  { label: "Depth Range", value: "70cm - 12m (ideal)" },
  { label: "IMU", value: "9-axis" },
  { label: "Microphone", value: "Yes" },
  { label: "Connectivity", value: "USB-C (10 Gbps), PoE (2.5 Gbps)" },
  { label: "Operating System", value: "Luxonis OS (Linux 5.15)" },
  { label: "IP Rating", value: "IP67 (water resistant)" },
  { label: "Operating Temp", value: "-20°C to 50°C" },
  { label: "Power", value: "1.5W - 25W" },
  { label: "Dimensions", value: "143.5 × 42.5 × 67.3 mm" },
  { label: "Weight", value: "674g" },
];

export function Specifications() {
  return (
    <section className={styles.specifications} id="specs">
      <div className={styles.container}>
        <h2 className={styles.title}>Technical Specifications</h2>
        <p className={styles.subtitle}>
          Detailed specifications for the OAK 4 D camera
        </p>

        <div className={styles.table}>
          {specs.map((spec) => (
            <div key={spec.label} className={styles.row}>
              <span className={styles.label}>{spec.label}</span>
              <span className={styles.value}>{spec.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
