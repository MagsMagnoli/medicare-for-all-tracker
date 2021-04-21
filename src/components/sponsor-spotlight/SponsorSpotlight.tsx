import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLanguage, MdMailOutline } from 'react-icons/md';
import { CongressPerson } from '../../models/congressperson';
import { initials } from '../../pages';
import Avatar from '../avatar/Avatar';
import IconButton from '../icon-button/IconButton';
import SponsorBadge, { SponsorType } from '../sponsor-badge/SponsorBadge';

const SponsorSpotlight = ({ sponsor }: { sponsor: CongressPerson }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div className="block-image">
        <Avatar
          src={`https://theunitedstates.io/images/congress/225x275/${sponsor.id}.jpg`}
          initials={initials(sponsor.firstName, sponsor.lastName)}
          size={200}
        />
        <SponsorBadge
          sponsorType={
            sponsor.sponsor
              ? SponsorType.Sponsor
              : sponsor.cosponsor
              ? SponsorType.Cosponsor
              : SponsorType.None
          }
        />
      </div>
      <div className="member-info mt-2">
        <strong>{`${sponsor.firstName} ${sponsor.lastName}`}</strong>
        <div>{sponsor.state}</div>
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        {sponsor.websiteURL && (
          <IconButton icon={<MdLanguage />} href={sponsor.websiteURL} />
        )}
        {sponsor.contactURL && (
          <IconButton icon={<MdMailOutline />} href={sponsor.contactURL} />
        )}
        {sponsor.facebookURL && (
          <IconButton
            icon={<FaFacebookF />}
            color="facebook.500"
            href={sponsor.facebookURL}
          />
        )}
        {sponsor.twitterURL && (
          <IconButton
            icon={<FaTwitter />}
            color="twitter.500"
            href={sponsor.twitterURL}
          />
        )}
        {sponsor.youtubeURL && (
          <IconButton icon={<FaYoutube />} href={sponsor.youtubeURL} />
        )}
      </div>
    </div>
  );
};

export default SponsorSpotlight;
