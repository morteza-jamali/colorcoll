import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./main.style";

export default function Index() {
  const _styles = makeStyles(styles)();

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      bottom="0"
      display="flex"
      flexDirection="column"
    >
      <AppBar position="static" className={_styles.appBar}>
        <Toolbar>
          <Typography className={_styles.grow} variant="h6" noWrap>
            {GLOBALS.TITLE}
          </Typography>
          <div className={_styles.grow} />
          <div className={_styles.sectionDesktop}>
            <Button color="inherit">Docs</Button>
            <IconButton edge="end" aria-label="github" color="inherit">
              <GitHubIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Grid container spacing={3} alignItems="stretch" className={_styles.grid}>
        <Grid item xs={4}>
          <Card className={_styles.card}>
            <CardContent>
              <Box display="flex" justifyContent="center" alignItems="center">
                <FontAwesomeIcon icon={faGithub} size="10x" />
              </Box>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs>
          <Card className={_styles.card}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Word of the Day
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
