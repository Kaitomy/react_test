import React, { useEffect, useState } from 'react';

const API_URL = 'https://68fff788e02b16d1753fc085.mockapi.io/api/users';

const UsersManagePage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    avatar: '',
    horse: ''
  });

  // Загрузка пользователей
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    } catch (error) {
      console.error('Ошибка загрузки:', error);
      setLoading(false);
    }
  };

  // Добавление пользователя
  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const newUser = await response.json();
      setUsers([...users, newUser]);
      setFormData({ name: '', avatar: '', horse: '' });
    } catch (error) {
      console.error('Ошибка добавления:', error);
    }
  };

  // Обновление пользователя
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/${editingId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const updated = await response.json();
      setUsers(users.map(u => u.id === editingId ? updated : u));
      setEditingId(null);
      setFormData({ name: '', avatar: '', horse: '' });
    } catch (error) {
      console.error('Ошибка обновления:', error);
    }
  };

  // Удаление пользователя
  const handleDelete = async (id) => {
    if (!window.confirm('Удалить этого пользователя?')) return;
    try {
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      setUsers(users.filter(u => u.id !== id));
    } catch (error) {
      console.error('Ошибка удаления:', error);
    }
  };

  // Начать редактирование
  const startEdit = (user) => {
    setEditingId(user.id);
    setFormData({
      name: user.name,
      avatar: user.avatar,
      horse: user.horse
    });
  };

  // Отменить редактирование
  const cancelEdit = () => {
    setEditingId(null);
    setFormData({ name: '', avatar: '', horse: '' });
  };

  if (loading) {
    return <div className="text-center">Загрузка...</div>;
  }

  return (
    <div>
      <h2 className="text-center mb-4">Управление пользователями</h2>

      {/* Форма добавления/редактирования */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">{editingId ? 'Редактировать пользователя' : 'Добавить нового пользователя'}</h5>
          <form onSubmit={editingId ? handleUpdate : handleAdd}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Имя"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="url"
                className="form-control"
                placeholder="URL аватара"
                value={formData.avatar}
                onChange={(e) => setFormData({ ...formData, avatar: e.target.value })}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Лошадь"
                value={formData.horse}
                onChange={(e) => setFormData({ ...formData, horse: e.target.value })}
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

      {/* Список пользователей */}
      <h5 className="mb-3">Все пользователи ({users.length})</h5>
      <div className="row g-3">
        {users.map((user) => (
          <div className="col-md-6 col-lg-4" key={user.id}>
            <div className="card h-100">
              <div className="card-body">
                <div className="d-flex align-items-start mb-3">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="rounded-circle me-3"
                    width="64"
                    height="64"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="flex-grow-1">
                    <h5 className="card-title mb-1">{user.name}</h5>
                    <p className="card-text mb-0">
                      <strong>Лошадь:</strong> {user.horse}
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-footer bg-transparent">
                <button 
                  className="btn btn-sm btn-warning me-2" 
                  onClick={() => startEdit(user)}
                >
                  Изменить
                </button>
                <button 
                  className="btn btn-sm btn-danger" 
                  onClick={() => handleDelete(user.id)}
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

export default UsersManagePage;

