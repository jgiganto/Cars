﻿using System.Threading;
using System.Threading.Tasks;
using Bsd.Cars.Domain.Orders;
using Bsd.Cars.Domain.Repositories.Orders;
using Bsd.Cars.Infraestructure.Context;
using Microsoft.EntityFrameworkCore;
using Telefonica.Arena.Infraestructure.Shared;

namespace Bsd.Cars.Infraestructure.Repositories.Orders
{
    public class OrderRepository : Repository<Order>, IOrderRepository
    {
        public OrderRepository(CarsContext context) : base(context)
        { }

        public async Task<Order> FindById(int id, CancellationToken cancellationToken)
        {
            return await _context.Set<Order>()
                .SingleOrDefaultAsync(o => o.Id == id, cancellationToken);
        }
    }
}