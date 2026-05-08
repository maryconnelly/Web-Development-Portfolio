import * as NavigationMenu from '@radix-ui/react-navigation-menu'

function Navbar() {
  return (
    <NavigationMenu.Root className="w-full bg-white text-black p-4 sticky top-0 z-50 shadow-sm">
      <NavigationMenu.List className="flex gap-6 justify-end">
        <NavigationMenu.Item>
          <NavigationMenu.Link href="/">
            Home
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link href="#about">
            About
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link href="#projects">
            Projects
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link href="#contact">
            Contact
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
}

export default Navbar