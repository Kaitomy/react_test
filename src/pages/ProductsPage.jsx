import React, { useEffect, useState } from 'react';

const API_URL = 'https://68fff788e02b16d1753fc085.mockapi.io/api/products';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    adjective: '',
    description: '',
    material: ''
  });

  // Загрузка продуктов
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error('Ошибка загрузки:', error);
      setLoading(false);
    }
  };

  // Добавление продукта
  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const newProduct = await response.json();
      setProducts([...products, newProduct]);
      setFormData({ name: '', adjective: '', description: '', material: '' });
    } catch (error) {
      console.error('Ошибка добавления:', error);
    }
  };

  // Обновление продукта
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/${editingId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const updated = await response.json();
      setProducts(products.map(p => p.id === editingId ? updated : p));
      setEditingId(null);
      setFormData({ name: '', adjective: '', description: '', material: '' });
    } catch (error) {
      console.error('Ошибка обновления:', error);
    }
  };

  // Удаление продукта
  const handleDelete = async (id) => {
    if (!window.confirm('Удалить этот продукт?')) return;
    try {
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      setProducts(products.filter(p => p.id !== id));
    } catch (error) {
      console.error('Ошибка удаления:', error);
    }
  };

  // Начать редактирование
  const startEdit = (product) => {
    setEditingId(product.id);
    setFormData({
      name: product.name,
      adjective: product.adjective,
      description: product.description,
      material: product.material
    });
  };

  // Отменить редактирование
  const cancelEdit = () => {
    setEditingId(null);
    setFormData({ name: '', adjective: '', description: '', material: '' });
  };

  if (loading) {
    return <div className="text-center">Загрузка...</div>;
  }

  return (
    <div>
      <h2 className="text-center mb-4">Управление продуктами</h2>

      {/* Форма добавления/редактирования */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">{editingId ? 'Редактировать продукт' : 'Добавить новый продукт'}</h5>
          <form onSubmit={editingId ? handleUpdate : handleAdd}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Название"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Прилагательное"
                value={formData.adjective}
                onChange={(e) => setFormData({ ...formData, adjective: e.target.value })}
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                placeholder="Описание"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
                rows="3"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Материал"
                value={formData.material}
                onChange={(e) => setFormData({ ...formData, material: e.target.value })}
                required
              />
            </div>
            <div className="d-flex gap-2">
              <button type="submit" className="btn btn-primary">
                {editingId ? 'Сохранить' : 'Добавить'}
              </button>
              {editingId && (
                <button type="button" className="btn btn-secondary" onClick={cancelEdit}>
                  Отмена
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* Список продуктов */}
      <h5 className="mb-3">Все продукты ({products.length})</h5>
      <div className="row g-3">
        {products.map((product) => (
          <div className="col-md-6 col-lg-4" key={product.id}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{product.adjective}</h6>
                <p className="card-text small">{product.description}</p>
                <p className="card-text"><strong>Материал:</strong> {product.material}</p>
              </div>
              <div className="card-footer bg-transparent">
                <button 
                  className="btn btn-sm btn-warning me-2" 
                  onClick={() => startEdit(product)}
                >
                  Изменить
                </button>
                <button 
                  className="btn btn-sm btn-danger" 
                  onClick={() => handleDelete(product.id)}
                >
                  Удалить
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;

