import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <section className="max-container bg-neutral-900">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo}
            alt="logo"
            width={150}
            height={46}/>
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">Step into greatness with every stride. Elevate your journey with Nike – where passion meets performance, and style fuels your story.</p>
          <div className="flex items-start gap-5 mt-8">
            {socialMedia.map((icon)=>(
              <div key={icon.alt} className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <img src={icon.src}
                alt={icon.alt}
                width={24}
                height={24}/>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
              {footerLinks.map((section)=>(
                <div key={section}>
                  <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">{section.title}</h4>
                  <ul>
                    {section.links.map((link)=>(
                      <li key={link} className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-coral-red">
                        <a>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
        </div>
      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <p className="font-montserrat cursor-pointer">&copy; Copyright. All rights reserved.</p>
        <p className="font-montserrat cursor-pointer">Terms & Conditions.</p>
      </div>
    </section>
  )
}

export default Footer