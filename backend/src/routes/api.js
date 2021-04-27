import pkg from 'express'
const {Router}=pkg
const router = Router()

router.get('/heartbeat', async (req, res) => {
  res.json({ connection: 'true' , hbMess: 'connected!'})
})

router.post('/login', async (req, res) => {
  res.json({msg: "logged in"})
})

router.post('/register', async (req, res) => {
  res.json({msg: "registered"})
})

router.get('/download1', async (req, res) => {
  res.json({msg: "yup"})
})

router.get('/download2', async (req, res) => {
  res.json({msg: "yup"})
})

export default router
