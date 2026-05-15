import * as NavigationMenu from '@radix-ui/react-navigation-menu'

function Navbar() {
  return (
    <NavigationMenu.Root className="w-full bg-[#FAFAF7] text-[#2C2C2C] p-4 sticky top-0 z-50 shadow-sm">
      <NavigationMenu.List className="flex items-center gap-6">
        <NavigationMenu.Item className="mr-auto">
          <span className="font-semibold text-[#2C2C2C]">Mary Connelly</span>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="/" className="hover:text-[#3D7A5E] transition-colors">
            Home
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link href="#about" className="hover:text-[#3D7A5E] transition-colors">
            About
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link href="#projects" className="hover:text-[#3D7A5E] transition-colors">
            Projects
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link href="#contact" className="hover:text-[#3D7A5E] transition-colors">
            Contact
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
}

export default Navbar