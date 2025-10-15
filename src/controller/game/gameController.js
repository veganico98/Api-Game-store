import express from 'express'
import getOne from "../../services/game/getGame.js"
import getAll from "../../services/game/getGames.js"
import destroy from '../../services/game/destroyGame.js';
import createAGame from '../../services/game/createGame.js';
import update from "../../services/game/updateGame.js"

const getGame = async(req, res) => {
    try{
        const id = req.params.id;

        if (!id){
            res.status(400);
            res.json({
            message: "Game On"
        });
        return;
        }

        const game = await getOne(id)

        if (!game){
            res.status(404);
            res.json({
                message: "Nenhum jogo encontrado"
            });
            return;
        }

        res.status(200);
        res.json({
            data: game
        });
    
    } catch (error){
        console.log(500);
        res.json({
            message: "Ocorreu um erro",
        });
    }  
};

const getGames = async (req, res) => {
    const games = await getAll()

    res.status(200)
    res.json({
        data: games
    });
};

const createGame = async (req, res) => {
    try{
        const {name, category, multiplayer} = req.body;

        if (!name || !category || !multiplayer){
            res.status(400);
            res.json({
                message: "Nome, categoria e multiplayer são obrigatórios"
            });
            return;
        }

        const createGame = await createAGame(req.body);

        if(!createGame){
            res.status(400);
            res.json({
                message: "Erro ao criar o game",
            })
            return;
        }

        let publisherCreate
        if (req.body.publisher){
            publisherCreate = await createByList(req.body.publisher, createGame.id)
        }

        res.status(201);
        res.json({
            data: createGame,
            publisherCreate
        });
    } catch (error) {
        console.log(error);
            res.status(500);
            res.json({
                message: "Ocorreu um erro",
        });
    }
}

const destroyGame = async (req, res) => {
    const id = req.params.id

    const game = await destroy(id)

    if (!game){
        res.status(400)
        res.json({
            message: "Falha ao deletar"
        })
        return
    }

    res.status(200)
    res.json({
        message: "Deletado com sucesso",
        game
    })
}

const updateGame = async (req, res) => {
    const data = req.body
    const id = req.params.id

    const game = await update(data, id)

    if(!game){
        res.status(400)
        res.json({
            message: "Não foi possivel atualizar o game"
        })
        return
    }

    res.status(200)
    res.json({
        message: "Game atualizado com sucesso",
        game
    })
}

export default {
    getGame,
    getGames,
    destroyGame,
    createGame,
    updateGame
};