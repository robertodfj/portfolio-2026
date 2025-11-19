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

const slugs = [
  'android',
  'androidstudio',
  'javascript',
  'netlify',
  'vercel',
  'html5',
  'css3',
  'react',
  'spring',
  'jira',
  'tailwindcss',
  'mysql',
];

const DynamicIconCloud = () => {
  const icons = useIcons(slugs);

  return (
    <div className="w-full max-w-[950px] mx-auto p-10">
      <Cloud options={{ radius: 200, overflow: false }}>{icons}</Cloud>
    </div>
  );
};

export default DynamicIconCloud;