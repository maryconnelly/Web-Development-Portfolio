import * as NavigationMenu from '@radix-ui/react-navigation-menu'

function Navbar() {
  return (
    <NavigationMenu.Root className="w-full bg-black text-white p-4">
      <NavigationMenu.List className="flex gap-6">
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