import { ReactNode } from 'react';
import { NavLink } from 'react-router';
import { NAVIGATION } from '@/constants/routes';

export type LayoutProps = {
    children: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <nav className="fixed top-4 left-4 p-2 bg-gray-600/50 backdrop-blur-lg rounded shadow-md z-10">
        <ul className="flex flex-col">
          {
            NAVIGATION.map(({
              path,
              label
            }, index) => (
              <li key={index}>
                <NavLink
                  to={path}
                  className='block text-gray-50 px-4 py-2 rounded hover:text-gray-100 aria-[current=page]:bg-gray-500'
                >
                  {label}
                </NavLink>
              </li>
            ))
          }
        </ul>
      </nav>
      {children}
    </>
  );
}

export { Layout };
