import CompanyIcon from '../../assets/CompanyIcon';
import LocationIcon from '../../assets/LocationIcon';
import TwitterIcon from '../../assets/TwitterIcon';
import WebsiteIcon from '../../assets/WebsiteIcon';
import { LocalGithubUser } from '../../types';
import { InfoItem, InfoItemProps } from '../InfoItem/InfoItem';
import styles from './UserInfo.module.scss';

interface UserInfoProps extends Pick<LocalGithubUser, 'blog' | 'company' | 'twitter' | 'location'> { }

export const UserInfo = ({ blog, company, location, twitter }: UserInfoProps) => {
   const items: InfoItemProps[] = [
      {
         id: crypto.randomUUID(),
         icon: <LocationIcon />,
         text: location
      },
      {
         id: crypto.randomUUID(),
         icon: <WebsiteIcon />,
         text: blog,
         isLink: true
      },
      {
         id: crypto.randomUUID(),
         icon: <TwitterIcon />,
         text: twitter
      },
      {
         id: crypto.randomUUID(),
         icon: <CompanyIcon />,
         text: company
      }
   ]

   return (
      <div className={styles.userInfo}>
         {items.map(item => (
            <InfoItem {...item} key={item.id} />
         ))}
      </div>
   )
}
