/* Delete Hero from the Table BY ID! */
DELETE FROM hero
WHERE heroId = $1
RETURNING *; /* Returning record that was deleted */
