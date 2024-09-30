import { copyrightSign, facebook, instagram, twitter } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"


const Footer = () => {
  return (
    <footer className="max-container ">
        <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
          <div className="flex flex-col items-start">
            <a href="/">
              <img src={footerLogo} alt="" width={150} height={46} />
            </a>
            <p className="mt-6 text-base lead7 font-montserrat text-white-400 sm:max-w-sm ">Get shoes ready for the new term at your nearest Nike store.
          Find Your perfect Size in Store.
          Get Reward</p>
          
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon)=>(
                <div className="bg-white hover:bg-coral-red h-8 w-8 rounded-full flex justify-center items-center">
                  <a href={icon.link}>
                      <img src={icon.src}  alt={icon.alt} width={24} height={24} />
                  </a>
                </div>
            ))}
          </div>
          </div>

          <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
              {footerLinks.map((section)=>(
                <div key={section}>
                    <h4 className="text-white font-montserrat font-medium text-2xl leading-normal mb-6">{section.title}</h4>
                      <ul className="text-white font-montserrat">
                        {section.links.map((link)=>(
                            <li key ={link.name} className="mb-3 font-montserrat text-baseleading-normal  hover:text-coral-red  hover:transition-all cursor-pointer ">
                              <a href={link.name}>{link.name}</a>
                            </li>
                        )
                      )}
                      </ul>
                </div>
              ))}
          </div>
        </div>

        <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">  
                <div className="flex flex-1 items-center font-montserrat gap-2 justify-start cursor-pointer">
                      <img src={copyrightSign} alt="copy right sign" width={20} height={20} className="rounded-full m-0" />
                      <p>Copyright. All rights resereved.</p>
                </div>
                <p className="font-montserrat cursor-pointer hover:text-coral-red">Terms & Conditions</p>
        </div>
    </footer>
  )
}

export default Footer