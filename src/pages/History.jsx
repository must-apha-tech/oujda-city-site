import img1 from "../assets/images/Himage1.jpg";
import img2 from "../assets/images/Himage2.jpg";
import img3 from "../assets/images/Himage3.jpg";
import img4 from "../assets/images/Himage4.jpg";
import img5 from "../assets/images/Himage5.jpg";
import img6 from "../assets/images/Himage6.jpg";
import img7 from "../assets/images/Himage7.jpg";
import img8 from "../assets/images/Himage8.jpg";


const data = [
  {
    title: "994 – Foundation of Oujda",
    image: img1,
    long: "Oujda was founded in 994 AD by the Berber leader Ziri ibn Atiyya as a fortified city near the eastern border of Morocco. Its strategic position on key trade routes made it vital for controlling movement and defending against rival tribes. The city started small, surrounded by walls, with narrow streets and a central marketplace. Over time, it attracted merchants, travelers, and artisans, forming the foundations of a vibrant urban center. Today, remnants of its ancient walls and gates still hint at its early beginnings and defensive importance.",
  },
  {
    title: "11th–15th centuries – Dynasties and conflicts",
    image: img2,
    long: "During the medieval era, Oujda experienced frequent changes in control, falling under dynasties such as the Almoravids, Almohads, and Marinids. Its strategic location near the border made it a frequent target in military campaigns and political struggles. Despite the turbulence, the city thrived as a regional hub of trade, culture, and learning. The successive dynasties left their mark on architecture, urban planning, and religious institutions, shaping Oujda into a resilient and culturally rich city.",
  },
  {
    title: "16th–18th centuries – Saadian and Alaouite period",
    image: img3,
    long: "From the 16th century, Oujda became part of the territories ruled by the Saadian and later the Alaouite dynasties. The city shifted from a contested border post to a more stable urban center, with rulers investing in mosques, markets, and public spaces. Its medina and historic architecture still reflect this period. Oujda continued to flourish as a commercial crossroads, connecting Morocco with neighboring regions while maintaining its unique blend of Berber, Arab, and Islamic heritage.",
  },
  {
    title: "1844 – Battle of Isly",
    image: img4,
    long: "The Battle of Isly in 1844 marked a dramatic moment in Oujda’s history. Moroccan forces clashed with the French near the town, resulting in a decisive French victory. This battle highlighted the increasing pressure of European powers on Morocco in the 19th century. While the city itself was not destroyed, the event emphasized Oujda’s strategic importance as a border city and foreshadowed further European influence in the region.",
  },
  {
    title: "1912–1956 – French Protectorate",
    image: img5,
    long: "During the French Protectorate, Oujda experienced significant changes in administration, infrastructure, and urban development. New roads, schools, and public buildings transformed the city while the colonial authorities expanded their influence. Despite foreign control, Oujda remained a center of Moroccan identity and resistance, as locals maintained traditions, culture, and a sense of community. The city’s medina continued to be the heart of daily life, balancing modernity and heritage.",
  },
  {
    title: "1956 – Independence of Morocco",
    image: img6,
    long: "With Morocco’s independence in 1956, Oujda embraced a new chapter in its history. The city celebrated the end of colonial rule while facing the challenges of nation-building. Economic growth, educational expansion, and urban development became central goals. Oujda retained its role as a cultural and commercial hub, honoring its past while looking toward a modern future. Independence also strengthened the city’s identity as a proud and historically significant part of Morocco.",
  },
  {
    title: "Late 20th century – Border closure",
    image: img7,
    long: "In the late 20th century, the closure of the border between Morocco and Algeria affected Oujda significantly. The city had long been a key crossing point for trade, travel, and cultural exchange. The border closure led to economic challenges and shifted the city’s focus inward, but Oujda remained resilient. Its inhabitants adapted, and the city continued to thrive as a local hub of commerce, education, and cultural activity, keeping its historical legacy alive.",
  },
  {
    title: "21st century – Modern Oujda",
    image: img8,
    long: "Today, Oujda is a modern, vibrant city that balances history with progress. Its streets combine historic medina alleys with modern neighborhoods, while commerce, education, and culture thrive. The city hosts festivals, markets, and cultural events, celebrating its rich heritage. Modern Oujda is also a gateway between Morocco and the wider region, connecting the past to the present and offering a glimpse of the city’s bright future while honoring its historical roots.",
  },
];

export default function History() {
  return (
    <section className="history-bg">
    <section className="history">
      {data.map((item, index) => (
        <div
          className={`history-item ${index % 2 === 0 ? "right" : "left"}`}
          key={index}
        >
          <div className="image-box">
            <img src={item.image} alt={item.title} />
          </div>

          <div className="text-box">
            <h3>{item.title}</h3>
            <p>{item.long}</p>
          </div>
        </div>
      ))}
    </section>
  </section>
  );
}
