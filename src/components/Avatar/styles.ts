import { makeStyles, createStyles } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

export default makeStyles(() =>
  createStyles({
    root: {
      backgroundColor: red[500]
    }
  })
)
