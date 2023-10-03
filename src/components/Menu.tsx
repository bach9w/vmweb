// mui
import { IconButton, Tooltip } from '@mui/material';

// mui - icons
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import AppsIcon from '@mui/icons-material/Apps';
import MailIcon from '@mui/icons-material/Mail';

// react-scroll
import { Link } from 'react-scroll';

const Menu = () => {
	return (
		<div className="fixed bottom-0 sm:bottom-12 w-full sm:w-fit left-1/2 -translate-x-1/2 bg-accent rounded-t-xl sm:rounded-full py-3 px-6 flex items-center justify-around sm:justify-center gap-12 z-30">
			<Link to="home" smooth>
				<Tooltip title="Начало">
					<IconButton>
						<HomeIcon />
					</IconButton>
				</Tooltip>
			</Link>
			<Link to="about" smooth>
				<Tooltip title="За нас" placeholder="top" arrow>
					<IconButton>
						<PersonIcon />
					</IconButton>
				</Tooltip>
			</Link>
		</div>
	);
};

export default Menu;
