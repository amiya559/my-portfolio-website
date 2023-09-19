import React from "react";
import "./achievements.css";
import { achievements } from "../../data/achievements";

const Achievements = () => {
  return (
    <section id="achievements">
      <h2 class="skillTitle">Achievements</h2>

      <div class="achievement-row">
        {achievements &&
          achievements.map((achievement) => (
            <div
              className="my-achievement"
              key={achievement.id}
              data-aos="zoom-in-up"
              data-aos-duration="1500"
            >
              <h4 className="achievement-name">
                {achievement.achievement_name}
              </h4>
              <p className="achievement-desc">
                {achievement.achievement_description}
              </p>

              <div className="shadow-icon">
                <i className={achievement.shadow_icon}></i>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Achievements;
