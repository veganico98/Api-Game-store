import express from 'express'

const getGame = async(req, res) => {
    res.json({
        message: "Game On"
    })
}

const getGames = async (req, res) => {
    res.json({
        message: "Games On"
    })
}

export default {
    getGame,
    getGames
}