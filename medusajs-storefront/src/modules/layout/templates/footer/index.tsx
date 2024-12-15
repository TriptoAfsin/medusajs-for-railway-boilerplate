import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { ArrowUp, Mail, Phone, Smartphone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { InstagramIcon } from "src/components/icons/instagram"
import { SnapchatIcon } from "src/components/icons/snapchat"
import { TiktokIcon } from "src/components/icons/tiktok-icon"
import { TwitterIcon } from "src/components/icons/twitter"
import { WhatsappIcon } from "src/components/icons/whatsapp"

const LOGO = "/logo.png"
const SBC_LOGO = "/sbc.webp"
const MOH_LOGO = "/moh.png"

const IMPORTANT_LINKS = [
  { title: "The Wellness Blog", href: "/blog" },
  { title: "About us", href: "/about" },
  { title: "Terms and Conditions", href: "/terms" },
  { title: "Privacy Policy", href: "/privacy" },
]

const SOCIAL_LINKS = [
  {
    icon: <InstagramIcon width={20} height={20} color="#4f67f2" />,
    href: "https://www.instagram.com/Evercaresa",
  },
  {
    icon: <TwitterIcon width={20} height={20} color="#4f67f2" />,
    href: "https://twitter.com/Evercaresa",
  },
  {
    icon: <SnapchatIcon width={20} height={20} color="#4f67f2" />,
    href: "https://www.snapchat.com/add/Evercaresa",
  },
  {
    icon: <TiktokIcon width={20} height={20} color="#4f67f2" />,
    href: "https://www.tiktok.com/@evercare.sa",
  },
]

const PAYMENT_METHODS = [
  {
    id: "1",
    name: "Mada",
    image: "/payment-providers/1.webp",
  },
  {
    id: "2",
    name: "Visa",
    image: "/payment-providers/2.webp",
  },
  {
    id: "3",
    name: "Bank Transfer",
    image: "/payment-providers/3.webp",
  },
  {
    id: "4",
    name: "Apple Pay",
    image: "/payment-providers/4.webp",
  },
  {
    id: "5",
    name: "Tabby",
    image: "/payment-providers/5.webp",
  },
  {
    id: "6",
    name: "Tamara",
    image: "/payment-providers/6.webp",
  },
  {
    id: "7",
    name: "COD",
    image: "/payment-providers/7.webp",
  },
]

const CONTACT_METHODS = [
  {
    icon: <Phone size={16} />,
    label: "Phone",
    href: "tel:966510012100",
  },
  {
    icon: <Smartphone size={16} />,
    label: "Mobile",
    href: "tel:+966510012100",
  },
  {
    icon: <WhatsappIcon width={16} height={16} />,
    label: "Whatsapp",
    href: "https://evercare.sa/en/whatsapp/send",
  },
  {
    icon: <Mail size={16} />,
    label: "Email",
    href: "mailto:info@evercare.sa",
  },
]

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-white">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-3">
          {/* Important Links Section */}
          <div>
            <h3 className="mb-4 font-semibold text-blue-600">
              Important Links
            </h3>
            <ul className="space-y-2">
              {IMPORTANT_LINKS.map((link) => (
                <li key={link.title}>
                  <LocalizedClientLink
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600"
                  >
                    {link.title}
                  </LocalizedClientLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Center Logo Section */}
          <div className="flex flex-col items-center">
            {/* Logo placeholder */}
            <div className="mb-4">
              <Image
                src={LOGO}
                alt="Logo"
                width={150}
                height={150}
                className="w-auto h-20"
              />
            </div>
            <p className="mb-4 text-center text-gray-600">
              الصحة الجمال طول العمر
            </p>
            {/* MOH License Box */}
            <div className="p-4 text-center border border-gray-200 rounded-lg">
              <Image
                src={MOH_LOGO}
                alt="MOH Logo"
                width={80}
                height={80}
                className="mx-auto mb-2"
              />
              <p className="text-blue-600">ترخيص من وزارة الصحة</p>
              <p className="text-gray-600">1400056471</p>
            </div>
          </div>

          {/* SBC Logo Section */}
          <div className="flex flex-col items-end">
            <div className="mb-4">
              <Image
                src={SBC_LOGO}
                alt="SBC Logo"
                width={100}
                height={100}
                className="w-auto h-16"
              />
            </div>
            <p className="text-blue-600">Verified on SBC</p>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="flex justify-center gap-4 mb-8">
          {CONTACT_METHODS.map((method, index) => (
            <a
              key={index}
              href={method.href}
              className="flex items-center gap-2 px-4 py-2 text-blue-600 border border-gray-200 hover:bg-blue-50"
            >
              {method.icon} {method.label}
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-8">
          {SOCIAL_LINKS.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="p-2 text-gray-600 hover:text-blue-600"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <Link href="#">
          <button className="p-2 text-white bg-blue-600 rounded-full hover:bg-blue-700">
            <ArrowUp size={20} />
          </button>
        </Link>
        <div className="flex items-center justify-center w-full py-4 mt-4 border-t border-gray-200">
          {/* Copyright */}
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">Copyright | 2024 Evercare</p>
          </div>
          {/* Payment Methods */}
          <div className="flex justify-center gap-4 ml-auto">
            {PAYMENT_METHODS.map((method) => (
              <div key={method.id} className="w-12 h-8 bg-transparent rounded">
                <Image
                  src={method.image}
                  alt={method.name}
                  width={70}
                  height={70}
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
