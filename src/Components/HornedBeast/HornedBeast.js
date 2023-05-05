import { useState } from "react";
import "./HornedBeast.css";

export default function HornedBeast({ title, imageUrl, description, handleModal }) {
const [votes, setVotes] = useState(0);

function handleIncClick() {
setVotes(votes + 1);
}

function handleDecClick() {
setVotes(votes - 1);
if (votes === 0) {
setVotes(0);
} else {
setVotes(votes - 1);
}
}

return (
<>
<section class="card daniel-container">
<div class="card-inner">
<div class="front-face">
<div class="image-container">


<h2>{title}</h2>
<img
onClick={() => {
handleModal({
title,
imageUrl,
description,
});
}}
className="beast-img"
src={imageUrl}
alt={description}
title={title}
/>
<p>{description}</p>
<p>
<span onClick={handleIncClick}>💚</span>
<span onClick={handleDecClick}>💔 {votes}</span>
</p>
</div>
</div>
</div>
</section>
</>

);
}