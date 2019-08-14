using Bsd.Cars.Application.Shared;
using Bsd.Cars.Application.Vehicles.Responses;
using System.Threading;
using System.Threading.Tasks;

namespace Bsd.Cars.Application.Vehicles.Queries
{
    public interface IGetVehiclesById
    {
        Task<VehicleModel> Query(int id, CancellationToken cancellationToken);
    }
}
