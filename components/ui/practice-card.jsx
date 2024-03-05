import Image from "next/image";
import Link from "next/link";
import { useState } from "react"; // Add missing import

function PracticeCard(props) {
  const { name, title, thumbnail, altText } = props;
  const [isHovered, setIsHovered] = useState(false); // Add missing state variable and useState hook

  return (
    <div className="flex h-80 w-64">
      <div id="image">
        <Image
          src={thumbnail}
          alt={altText}
          width={100}
          height={400}
          className="h-80 w-full"
          loading="lazy"
        />
      </div>
      <div
        id="overlay"
        className={`absolute bottom-0 ${isHovered ? 'h-1/3' : 'h-1/4'} w-64 bg-primaryAccent hover:bg-secondaryAccent group`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex mx-auto">
          <h3 className="text-primaryLight group-hover:text-primaryDark mx-auto">
            <Link href={`/specialties-and-services/${name}`}>{title}</Link>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default PracticeCard;
