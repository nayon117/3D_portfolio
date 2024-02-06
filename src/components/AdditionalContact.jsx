import { socialLinks } from "../constants";

const AdditionalContact = () => {
    return(
        <div>
              <div className="flex justify-between items-center mt-12">
                <p className="cta-text">Also I am available in </p>
                <div className="flex items-center gap-6">
                    {socialLinks?.map((link)=>(
                        <a key={link.name} href={link.link} target="_blank" rel="noreferrer">
                            <img src={link.iconUrl} alt={link.name} className="w-8 h-8 object-contain" />
                        </a>
                    ))}
                </div>
             </div>
        </div>
    )}
export default AdditionalContact;