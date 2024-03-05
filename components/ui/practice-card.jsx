import Image from "next/image";
import Link from "next/link";
import { useState } from "react"; // Add missing import

function PracticeCard(props) {
  const { name, title, thumbnail, altText } = props;
  const [isHovered, setIsHovered] = useState(false); // Add missing state variable and useState hook

  let imageValue = thumbnail?.length > 0 ? thumbnail : '/images/primarycare.jpg';
  let titleValue = title || 'Sample Practice';
  let nameValue = name || 'sample-practice'; 

  return (
    <div className="flex h-96 w-80 md:w-64 md:h-80">
      <div id="image">
        <img src={imageValue} alt={altText} className="h-80 w-full" />
      </div>
      <div
        id="overlay"
        className={`absolute bottom-0 ${isHovered ? 'h-1/3' : 'h-1/4'} w-80 md:w-64 bg-primaryAccent hover:bg-secondaryAccent group`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex mx-auto">
          <h3 className="text-primaryLight group-hover:text-primaryDark mx-auto px-4">
            <Link href={`/practices/${nameValue}`}>{titleValue}</Link>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default PracticeCard;
