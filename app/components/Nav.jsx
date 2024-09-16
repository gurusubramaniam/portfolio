export default function Nav() {
    const setClass = (element) => {
        let linkClass =
          'nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 flex items-center py-3';
        if (activeMenu === element) {
          return linkClass + ' active';
        }
        return linkClass;
      };
    return (
    <nav className="nav hidden lg:block">
          <ul className="mt-16 w-max">
            <li>
              <a href="#About" className={setClass('#About')}>
                <span className="nav-indicator h-px mr-4 bg-slate-500" />
                About
              </a>
            </li>
            <li>
              <a href="#Experience" className={setClass('#Experience')}>
                <span className="nav-indicator h-px mr-4 bg-slate-500" />
                Experience
              </a>
            </li>
            <li>
              <a href="#Projects" className={setClass('#Projects')}>
                <span className="nav-indicator h-px mr-4 bg-slate-500" />
                Repositories
              </a>
            </li>
          </ul>
        </nav>
  )
}
