export const generateDesign = async (formData) => {
  const res = await fetch('/api/generate-design', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  if (!res.ok) throw new Error('Failed to generate design');
  return res.json();
};

export const getDesign = async (id) => {
  const res = await fetch(`/api/designs/${id}`);
  if (!res.ok) throw new Error('Design not found');
  return res.json();
};
