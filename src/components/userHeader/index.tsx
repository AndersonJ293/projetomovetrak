import styles from "./userHeader.module.css";
import Image from "next/image";
import ThreeDots from "../../assets/icons/threeDots.png";
import ProfilePlaceholder from "../../assets/profilePlaceholder.jpg";

export default function UserHeader() {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <Image className={styles.foto} width={50} height={50} alt="" src={ProfilePlaceholder} />
                <div className={styles.info}>
                    <h1 className={styles.nome}>Victor</h1>
                    <h2 className={styles.email}>victor.castro@movetrak</h2>
                </div>
            </div>
            <div className={styles.iconDiv}>
                <Image width={30} height={30} alt="" src={ThreeDots} />
            </div>
        </div>
    )
}