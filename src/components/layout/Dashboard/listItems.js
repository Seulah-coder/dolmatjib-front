import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import List from '@mui/material/List';

const data = { 
  "menu": [{"id": 1, "name": "1번", "subMenu": []} , {"id": 2, "name": "2번", "subMenu": []} , {"id": 3, "name": "3번", "subMenu": []}]
}

function MainListItems() {
  const [open, setOpen] = React.useState(true);

  let [menu, setMenu] = React.useState(['1번 메뉴', '2번 메뉴', '3번 메뉴']);
  let [subMenu1, setSubMenu1] = React.useState(['1번 서브 메뉴', '2번 서브 메뉴', '3번 서브 메뉴']);
  let [subMenu2, setSubMenu2] = React.useState(['1번 서브 메뉴', '2번 서브 메뉴', '3번 서브 메뉴']);
  let [subMenu3, setSubMenu3] = React.useState(['1번 서브 메뉴', '2번 서브 메뉴', '3번 서브 메뉴']);


  //TODO: 데이터로 렌더링
  // console.log(data);

  const renderMenu = (menu) =>{
    let array = [];
    for(let i=0; i<menu.length; i++){
      array.push(
        <div>
              <ListItemButton onClick={() => handleMenuClick(menu[i])}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={menu[i]}/>
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }} onClick={handleSubMenuClick}>
                        <ListItemIcon>
                          <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                      </ListItemButton>
                    </List>
                  </Collapse>
        </div>
      )
    }
    return array;
  }

  const renderSubMenu = () =>{

  }

  const handleMenuClick = (event) => {
    console.log("MenuClick");
    console.log(event);
    setOpen(!open);
  };

  const handleSubMenuClick = () => {
    console.log("subMenuClick");
  }

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
    >
      {renderMenu(menu)}
    </List>
  );
}

export default MainListItems;



// export const mainListItems = (
//   <React.Fragment>
//     <ListItemButton>
//       <ListItemIcon>
//         <DashboardIcon />
//       </ListItemIcon>
//       <ListItemText primary="Dashboard" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <ShoppingCartIcon />
//       </ListItemIcon>
//       <ListItemText primary="Orders" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <PeopleIcon />
//       </ListItemIcon>
//       <ListItemText primary="Customers" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <BarChartIcon />
//       </ListItemIcon>
//       <ListItemText primary="Reports" />
//     </ListItemButton>
//     <ListItemButton onClick={handleClick}>
//       <ListItemIcon>
//         <LayersIcon />
//       </ListItemIcon>
//       <ListItemText primary="Integrations" />
//       {open ? <ExpandLess /> : <ExpandMore />}
//     </ListItemButton>
//   </React.Fragment>
// );

// export const secondaryListItems = (
//   <React.Fragment>
//     <ListSubheader component="div" inset>
//       Saved reports
//     </ListSubheader>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Current month" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Last quarter" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Year-end sale" />
//     </ListItemButton>
//   </React.Fragment>
// );
