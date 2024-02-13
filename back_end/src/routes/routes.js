import { Router } from 'express';
import { checkApiHealth, getEvents, getEventById, registerForEvent } from '../controllers/index.js';
const router = Router();

// Check API state
router.get('/v1/api/health', checkApiHealth);

// Get all events
router.get('/v1/api/events', getEvents);

// Get a specific event by ID
router.get('/v1/api/events/:eventId', getEventById);

// Register for an event
router.post('/v1/api/events/:eventId/register', registerForEvent);

// Handle unknown endpoints
router.use((req, res) => res.status(404).json({ message: `Endpoint ${req.path} not found` }));

export default router;