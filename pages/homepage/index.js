import styles from "./homepage.module.scss"
import NavHeader from "../../components/NavHeader"

export default function HomePage() {
  const { HeroCallout } = styles
  return (
    <div>
      <NavHeader />
      <h1 className={HeroCallout}>Welcome to Dhritiman's webpage!!</h1>
    </div>
  )
}
