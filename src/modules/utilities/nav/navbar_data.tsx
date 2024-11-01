import { NavbarData } from "../../../interface/navbar";
import {
  CreditScoreOutlined, DescriptionOutlined, Home,
  Image, NoteOutlined, PaymentOutlined, TokenOutlined
} from "@mui/icons-material";

export const navbar: NavbarData[] = [
  {
    id: 0,
    menu: 'home',
    icon: <Home/>
  },
  {
    id: 1,
    menu: 'interface',
    icon: <TokenOutlined/>
  },
  {
    id: 2,
    menu: 'components',
    icon: <PaymentOutlined/>
  },
  {
    id: 3,
    menu: 'pages',
    icon: <NoteOutlined/>
  },
  {
    id: 4,
    menu: 'forms',
    icon: <CreditScoreOutlined/>
  },
  {
    id: 5,
    menu: 'gallery',
    icon: <Image/>
  },
  {
    id: 6,
    menu: 'documentation',
    icon: <DescriptionOutlined/>
  }
]