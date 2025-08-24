import { Disclosure, Transition } from '@headlessui/react'
import ThemeToggle from './ThemeToggle'

const Navigation = ({ activeSection, scrollToSection }) => {
  const handleMenuClick = (sectionId) => {
    scrollToSection(sectionId)
  }

  return (
    <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-50 shadow-sm">
      <div className="container-max">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold gradient-text">Portfolio</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-colors duration-200 ${
                  activeSection === section
                    ? 'text-blue-600 font-medium'
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600'
                }`}
              >
                {section}
              </button>
            ))}
            <ThemeToggle />
          </div>

                    {/* Mobile Navigation */}
          <Disclosure as="div" className="md:hidden">
            {({ open }) => (
              <>
                <div className="flex items-center space-x-4">
                  <ThemeToggle />
                  <Disclosure.Button className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </Disclosure.Button>
                </div>

                <Transition
                  enter="transition duration-200 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-100 ease-in"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-700">
                    <div className="flex flex-col space-y-4 py-4">
                      {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
                        <Disclosure.Button
                          key={section}
                          as="button"
                          onClick={() => handleMenuClick(section)}
                          className={`capitalize text-left px-4 py-2 transition-colors duration-200 ${
                            activeSection === section
                              ? 'text-blue-600 font-medium bg-blue-50 dark:bg-blue-900'
                              : 'text-gray-600 dark:text-gray-300 hover:text-blue-600'
                          }`}
                        >
                          {section}
                        </Disclosure.Button>
                      ))}
                    </div>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
          </div>
      </div>
    </nav>
  )
}

export default Navigation 