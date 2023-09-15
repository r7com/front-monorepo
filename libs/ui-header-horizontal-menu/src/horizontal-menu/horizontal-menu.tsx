import { ArrowIcon } from '../icons'

export function HorizontalMenu({ data }) {
  return (
    <ul className="xl:flex relative">
      {data.map(item => (
        <li
          className="hover:before:content-[''] hover:before:absolute hover:before:bottom-0 hover:before:w-full relative group transition-all
        text-neutral-high-400 hover:before:border-b-[2px] hover:before:border-solid hover:before:border-b-neutral-high-400
          font-semibold text-xxxs hover:font-bold cursor-pointer leading-[58px] flex justify-center items-center mx-[8px]"
          key={item._id.$oid}
        >
          <a
            className="mr-[6px]"
            href={item.url}
            title={item.name}
            target={item.new_window ? '_blank' : '_self'}
            rel="noreferrer"
          >
            {item.name}
          </a>
          <ArrowIcon />
          <ul className="absolute top-[58px] z-10 bg-neutral-high-400 rounded-md shadow-level3 py-[10px] hidden group-hover:flex">
            {item.columns?.map(subMenu => {
              return (
                <ul
                  className="px-xs relative whitespace-nowrap before:content-[''] before:h-full before:w-[1px] before:bg-[#dee2e6] before:left-0 first:before:bg-transparent before:absolute"
                  key={subMenu._id.$oid}
                >
                  {subMenu.children_name && (
                    <p className="text-xxxs font-bold text-dark-low-600 leading-normal py-nano">
                      {subMenu.children_name}
                    </p>
                  )}
                  {subMenu.links?.map(subMenuItem => (
                    <li
                      key={subMenuItem._id.$oid}
                      className="leading-[10px] py-[14px] hover:underline"
                    >
                      <a
                        style={{ color: subMenuItem.color }}
                        className="text-neutral-low-400 text-xxxs font-normal font-open-sans"
                        href={subMenuItem.url}
                        target={item.new_window ? '_blank' : '_self'}
                        rel="noreferrer"
                        title={subMenuItem.name}
                      >
                        {subMenuItem.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )
            })}
          </ul>
        </li>
      ))}
    </ul>
  )
}

export default HorizontalMenu
