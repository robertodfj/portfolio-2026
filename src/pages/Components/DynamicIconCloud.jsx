import { useState, useEffect } from 'react';
import { Cloud, renderSimpleIcon, fetchSimpleIcons } from 'react-icon-cloud';

const useIcons = (slugs) => {
  const [icons, setIcons] = useState(null);

  useEffect(() => {
    fetchSimpleIcons({ slugs }).then(setIcons);
  }, [slugs]);

  if (icons) {
    return Object.values(icons.simpleIcons).map((icon) =>
      renderSimpleIcon({
        icon,
        size: 80,
        aProps: {
          onClick: (e) => e.preventDefault(),
        },
      })
    );
  }

  return <span>Loading...</span>;
};

// Lista de slugs de Simple Icons (asegúrate de que existan en https://simpleicons.org/)
const slugs = [
  'azure',
  'android',
  'androidstudio',
  'javascript',
  'netlify',
  'vercel',
  'visualstudiocode',
  'html5',
  'css3',
  'react',
  'java',
  'spring',
  'jira',
  'tailwindcss',
  'mysql',
];

const DynamicIconCloud = () => {
  const icons = useIcons(slugs);

  return (
    <div style={{ width: '950px', height: '950px', margin: '0 auto' }} className='p-10 md:lr-10'>
      <Cloud>{icons}</Cloud>
    </div>
  );
};

export default DynamicIconCloud;