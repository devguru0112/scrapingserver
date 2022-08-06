module.exports = (sequelize, Sequelize) => {
    const Malayalam = sequelize.define("malayalam", {
        poster: {
            type: Sequelize.STRING,
        },

        title: {
            type: Sequelize.STRING,
        },

        year: {
            type: Sequelize.STRING,
        },
        runtime: {
            type: Sequelize.STRING,
        },

        genres: {
            type: Sequelize.STRING,
        },
        country: {
            type: Sequelize.STRING,
        },
        language: {
            type: Sequelize.STRING,
        },
        videourl: {
            type: Sequelize.STRING,
        },
    });

    return Malayalam;
};