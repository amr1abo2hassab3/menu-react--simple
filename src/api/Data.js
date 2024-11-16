import img1 from "../imags/203534.jpg";
import img2 from "../imags/image-96073-close-up-plate-fresh-pancakes-honey-delicious-healthy-brea-preview.jpg";
import img3 from "../imags/png-clipart-breakfast-sandwich-tuna-fish-sandwich-melt-sandwich-croque-monsieur-sandwiches-food-breakfast.png";
import img4 from "../imags/image-89956-picture-above-delicious-grilled-chicken-pieces-roasted-chi-preview.jpg";
import img5 from "../imags/img-20180421-213154-largejpg.jpg";
import img6 from "../imags/images.jpeg";
import img7 from "../imags/images (1).jpeg";
import img8 from "../imags/images (2).jpeg";
import img9 from "../imags/images (3).jpeg";

const data = [
  {
    id: Math.random(),
    title: "وجبة فطار",
    description:
      "بيض مخفوق مع خبز محمص، جبن وزيتون، يُقدَّم مع كوب من الشاي أو القهوة. وجبة خفيفة ومغذية لبدء اليوم.",
    img: img1, // تمرير المسار مباشرة
    price: "50 جنيه",
    category: "فطار",
  },
  {
    id: Math.random(),
    title: "وجبة فطار",
    description:
      "بان كيك محضّر طازجًا مع طبقة من العسل الطبيعي وفواكه موسمية. يُقدّم مع كوب من العصير الطازج.",
    img: img2, // تمرير المسار مباشرة
    price: "65 جنيه",
    category: "فطار",
  },
  {
    id: Math.random(),
    title: "وجبة فطار",
    description:
      "ساندويتش تونة مع خس وطماطم وخيار، يُقدّم مع عصير برتقال طازج. وجبة صحية وسريعة.",
    img: img3, // تمرير المسار مباشرة
    price: "45 جنيه",
    category: "فطار",
  },
  {
    id: Math.random(),
    title: "وجبة غداء",
    description:
      "طبق دجاج مشوي متبّل بالأعشاب والبهارات، مع أرز أبيض وسلطة خضراء طازجة. يُقدّم مع مشروب بارد.",
    img: img4, // تمرير المسار مباشرة
    price: "100 جنيه",
    category: "غداء",
  },
  {
    id: Math.random(),
    title: "وجبة غداء",
    description:
      "باستا إيطالية مطهوة تمامًا مع صلصة الطماطم الطازجة وزيت الزيتون وجبن البارميزان. يُقدّم مع خبز الثوم.",
    img: img5, // تمرير المسار مباشرة
    price: "90 جنيه",
    category: "غداء",
  },
  {
    id: Math.random(),
    title: "وجبة غداء",
    description:
      "ستيك لحم مشوي بتتبيلة خاصة، يُقدّم مع بطاطس مقلية وخضروات مشوية. وجبة غداء مثالية لمحبي اللحوم.",
    img: img6, // تمرير المسار مباشرة
    price: "150 جنيه",
    category: "غداء",
  },
  {
    id: Math.random(),
    title: "وجبة عشاء",
    description:
      "ساندويتش برجر مشوي مع جبن شيدر، خس، طماطم، ومخللات، يُقدّم مع بطاطس مقلية ومشروب غازي.",
    img: img7, // تمرير المسار مباشرة
    price: "75 جنيه",
    category: "عشاء",
  },
  {
    id: Math.random(),
    title: "وجبة عشاء",
    description:
      "شوربة طماطم ساخنة مع كريمة وزيت زيتون، تُقدّم مع خبز محمص وسلطة جانبية. وجبة دافئة وخفيفة للعشاء.",
    img: img8, // تمرير المسار مباشرة
    price: "60 جنيه",
    category: "عشاء",
  },
  {
    id: Math.random(),
    title: "وجبة عشاء",
    description:
      "بيتزا مارجريتا مع جبن موزاريلا طازجة، صلصة طماطم، وريحان، تُخبز في فرن الحطب وتُقدّم ساخنة.",
    img: img9, // تمرير المسار مباشرة
    price: "85 جنيه",
    category: "عشاء",
  },
];

export default data;
