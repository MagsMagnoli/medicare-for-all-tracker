import React, { ChangeEvent, useEffect, useState } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { Chamber, CongressPerson } from '../../models/congressperson';
import { mergedStateNamesByStateKeys } from '../../models/state';
import Avatar from '../avatar/Avatar';
import SponsorBadge, { SponsorType } from '../sponsor-badge/SponsorBadge';
import './styles.css';

enum Filter {
  House,
  Senate,
  None,
}

const processString = (s: string) => s.replaceAll(' ', '').toLowerCase();

const Sponsors = ({ congressData }: { congressData: CongressPerson[] }) => {
  const houseMembers = congressData.filter(
    (item) => item.chamber === Chamber.House,
  );

  const [filteredData, setFilteredData] = useState(houseMembers);

  const yesSponsors = houseMembers.filter((item) => item.cosponsor).length;
  const noSponsors = houseMembers.filter((item) => !item.cosponsor).length;

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilteredData(
      houseMembers.filter((item) => {
        const name = processString(`${item.firstName}${item.lastName}`);
        const state = processString(mergedStateNamesByStateKeys[item.state]);
        const query = processString(e.target.value);
        return name.includes(query) || state.startsWith(query);
      }),
    );
  };

  return (
    <section className="section">
      <div className="container-xl">
        <div className="stats-container">
          <div
            className="stats"
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <strong className="text-green">{yesSponsors}</strong>
            <FaCheckCircle className="text-green ml-4" />
            <strong className="text-red ml-8">{noSponsors}</strong>
            <FaTimesCircle className="text-red ml-4" />
          </div>
          <input
            style={{ padding: 8, width: 300 }}
            className="mt-4"
            type="text"
            placeholder="Search by name or state"
            onChange={handleSearchChange}
          />
        </div>
        <div className="avatar-container mt-8">
          {filteredData.map((item) => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div className="block-image">
                <Avatar
                  src={`https://theunitedstates.io/images/congress/225x275/${item.id}.jpg`}
                  initials={`${item.firstName.slice(0, 1)}${item.lastName.slice(
                    0,
                    1,
                  )}`}
                />
                <SponsorBadge
                  sponsorType={
                    item.sponsor
                      ? SponsorType.Sponsor
                      : item.cosponsor
                      ? SponsorType.Cosponsor
                      : SponsorType.None
                  }
                />
              </div>
              <div className="member-info mt-2">
                <strong>{`${item.firstName} ${item.lastName}`}</strong>
                <div>{`${item.party}-${item.state}`}</div>
                <div className="social-links mt-1">
                  {item.websiteURL && (
                    <a
                      className="social-link"
                      style={{ color: '#484848' }}
                      href={item.websiteURL}
                      target="_blank"
                      rel="noopener"
                    >
                      <svg
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        height="20px"
                        width="20px"
                        stroke="currentColor"
                        fill="currentColor"
                      >
                        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path>
                      </svg>
                    </a>
                  )}
                  {item.twitterURL && (
                    <a
                      className="social-link"
                      style={{ color: '#1DA1F2' }}
                      href={item.twitterURL}
                      target="_blank"
                      rel="noopener"
                    >
                      <svg
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        height="20px"
                        width="20px"
                        stroke="currentColor"
                        fill="currentColor"
                      >
                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
