import "./feature.scss";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Tooltip,
  Typography
} from "@mui/material";
import { InfoIcon } from "../../../Assets/SVG/infoIcon";
import { CARDS_LIST } from "../../../Configs/Constants/const";

export default function Cards() {
  return (
    <div className="feature-cards-conatainer">
      {CARDS_LIST.map((card, index) => (
        <div className="feature-card" key={index}>
          <Card sx={{ width: 400 }}>
            <CardHeader
              title={card.title}
              action={
                <Tooltip title={card.information}>
                  <IconButton>
                    <InfoIcon />
                  </IconButton>
                </Tooltip>
              }
            />
            <CardMedia
              component="img"
              height="346"
              image={card.thumbnail}
              alt={card.description}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
            <div className="like-share-container">
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
}
