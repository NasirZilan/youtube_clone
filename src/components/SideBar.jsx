import { Stack } from '@mui/material'
import { categories } from '../utils/constants'

const SideBar = () => (
    <Stack
    direction="row"
    sx={{
        overflowY:"auto",
        height: { sx:'auto',md:'95%' },
        flexDirection:{md: 'column'},
    }}>
{categories.map((category)=>(
    <button className='category-btn'>
      <span></span>
      <span></span>
    </button>
))}
    </Stack>
)

export default SideBar;