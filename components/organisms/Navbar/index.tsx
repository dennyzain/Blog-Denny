import { faArrowLeftLong, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { NavbarProps } from '../../../interfaces/PostSection';
import { Animate } from '../../atoms/Animate';
import useDarkMode from '../../hooks/useDarkMode';
import NavbarDesktop from '../../molecules/NavbarDesktop';
import Profile from '../../molecules/Profile';

export default function Navbar({ user, status }: NavbarProps) {
  const [theme, setTheme] = useDarkMode();
  const { attributes } = user;
  const {
    push, route,
  } = useRouter();

  const pathBlog = '/blog/[slug]';
  const pathCategory = '/blog/category/[slugCtg]';
  const [isProfile, setIsProfile] = useState(false);
  const activeClass = cx({
    'dark:border-light-mode border-dark-mode border-b-2 ': true,
    'text-sm md:text-lg xl:text-lg z-10': true,
  });
  const handleProfile = () => setIsProfile(!isProfile);
  const handleBack = () => push('/');
  const handleDarkMode = () => (theme === 'light' ? setTheme('dark') : setTheme('light'));

  useEffect(() => {
  }, []);

  return (
    <>
      <div className="flex justify-between p-3">
        <h1 className="font-poppins font-extrabold text-xl self-center">DZNX</h1>
        <button
          type="button"
          aria-label="buttondarkmode"
          className="px-2 py-1 border-2 self-center border-dark-mode rounded-lg dark:border-light-mode"
          onClick={handleDarkMode}
        >
          {theme === 'light' ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
        </button>
      </div>
      <div className="flex justify-between py-3 px-6 md:hidden ">
        {route === pathBlog || route === pathCategory ? (
          <button onClick={handleBack} type="button" className="font-roboto">
            <FontAwesomeIcon
              icon={faArrowLeftLong}
              bounce
              className="self-center text-xs pr-1 font-poppins"
            />
            back
          </button>
        ) : (
          <button type="button" className="flex" onClick={handleProfile}>
            <Image
              src={attributes.profile.data.attributes.url}
              blurDataURL={attributes.profile.data.attributes.url}
              placeholder="blur"
              width={40}
              height={40}
              alt="profile"
              className="rounded-full"

            />
            <p className="self-center text-xs pl-1  font-poppins">Who am i ?</p>
          </button>
        )}
      </div>
      <div className="hidden md:block transition-all">
        <NavbarDesktop img={attributes.profile.data.attributes.url} />
      </div>
      {isProfile && (
        <Animate>
          <Profile />
        </Animate>
      )}
      <div className="flex justify-around font-poppins border-slate-300 border-b-2 md:mt-3 xl:mt-7">
        <Link href="/">
          <button type="button" className={activeClass}>
            Post
          </button>
        </Link>
        <Link href="/project">
          <button type="button" className={activeClass}>
            Project
          </button>
        </Link>
        <Link href="/certificate">
          <button type="button" className={activeClass}>
            Certificate
          </button>
        </Link>
      </div>
    </>
  );
}
